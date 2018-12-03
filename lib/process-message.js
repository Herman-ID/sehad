// import library
var tumbuhan = require("../models/tumbuhan_model");
var penyakit_model = require("../models/penyakit_model");
var scrap = require("./scrap_web");
var statistik = require("../models/statistic_model");

const url = require("url");

const Dialogflow = require("dialogflow");
const Pusher = require("pusher");

// API key untuk dialogflow
const projectId = "sehad-7d476";
const sessionId = "123456";
const languageCode = "en-US";
const config = {
  credentials: {
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNH+T8LF9Qm4G0\nDnH2phO4vAbBIQaGHPRH2wfaSX3JtQtpEwy4qnFs3ThzPrEZ2H4nFJ56/6c1N1nw\nP40wEJ0bO58L3mF9HOnoAUdwepE7y3gihbL6MsUDzgvjrBZN0BnXt4S/rnwoVPXU\nA0kXs68IEtsptFtD5z9Olfs9oyjhBlItoECcdp/3cpAXj9kbii2b3bAJlWAXOAJx\n8SzJW9wF76V4o6+zDUwUKUiQJRkcqqpuUAiPZ3DcOhVvpQpyw+LcfZQ2h58efoAz\n8ATPIpqCcOo1zbNKk3bsmm2JnUsLa7pT+MDYMVVHU8UwEseGGO/cfFsWMvFzyOg9\nPKIv9C8VAgMBAAECggEAD3nxPELaINTQIRZYlt7KQiKS8o4Gq1ESmpFLXbbfHLw3\nfi1dGlm8cRWdJWTSK+cKWEcqpeZqu+MkkAcwzzLnB5+kolqcSbpIE6R1EBF5/7mc\nTiPURc2q0QdXck1mPry4Fm8sPuIapVheVn62TGmBh+m+9hM7h5CyVWrk0oO1mTSk\nSoioiLlH3sXZ/oIEYYrzVADPUKx1xrCBzd3RN2B7CbOYJaH5Xnp5ZhMg/9Irv3ZE\nLx1n/fOE/BbglmCyI7psyq97gtLRxPmA0IIaJPzFjYxfcq4RHbqAOiec5YUWyU9a\nKQ6LZCXeV/KgceNC89BKWIqKZZRKcwWtq1UQ6ygwSQKBgQDr+jh3MWhcBNMbgr1+\nxu6v/Tw2sz2iAsKLIV4yivX2p+obMov2JJunrvrumFkAHyWDjlZUFXaTHGpE2W/I\nWgjSqq0hEUANbu7tzE3o29XIMRMsh2pUd2pl/D8zxtMWRoR/XtV+yfmSC4hOiXXB\nKaMb/WAYnmMUBYpQp32WgHHcdwKBgQDeh4ErVehNZvQvbbcb2JgQKCHw0kyAcfI2\nnR05afjXNOGVQVLDXq7PRPNyfmGAjiN1FYekxUdQJzoNaCH4zHUKD/mdymsN/G33\nBC6Epd6NPHQoqJ1d3nd8uxKwZn8nbPN55G4q5PnRFW68LCsUssmoM30qIOa/Q+wQ\nk+nU5fOP0wKBgQCqeGiyMo8haprXFOuv2iY0HMyS94lesH+54rEZ8ikdts/4NdvG\nRUvtJws/se8Zl2aSUxEqTRcLz0s10Z5fLiuRhJrteHi9O5Z/U0g1IBqgNFOVp324\n50uFwWQnE0sKnIa7PNcecOpKBurBUawvjtS2M6RoJIOOwzHYcibXwpJ+oQKBgHjn\n9u6sxoMHpTT/z7V5gWWF6KsIGDjRsGCsDOzc/y8utEJ8M5OjJifHtt5GfIN0tx8u\ni3yjE5QhPBF8uriLnivRcjahfHkk5jqIMx4vYTQr3JEazCXscc97dTQS/JNXRxK7\nYoA72OAZXQkwllewrJCPKTpylezl4qU/OJVMO4GxAoGAJoChbQRE8dOebbPeGyDY\n6szmDJkjplG14+NUDSnfj8BodCb1yW53VvrU7Q3WBrpwWlKjnC+qq88ZJVs6F+PT\npFF/8GpL9FHDP7ZEJax0ExoCPiYlathU7kcCDDwMNhPfhlwco8w5L3xnXUeW4ktl\nFDbsLJm36j0TmM3eHL8/Z9I=\n-----END PRIVATE KEY-----\n",
    client_email: "dialogflow-tumepc@sehad-7d476.iam.gserviceaccount.com"
  }
};

// Pusher API key
const pusher = new Pusher({
  appId: "655242",
  key: "82e3a3134057d11e5762",
  secret: "bb7350bbbf8a46d55885",
  cluster: "eu",
  encrypted: true
});

const sessionClient = new Dialogflow.SessionsClient(config);
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const system_app = "http://localhost:5000/"; //server API

const processMessage = (message,channel_id) => {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode
      }
    }
  };
  sessionClient
    .detectIntent(request)
    .then(responses => {
      const result = responses[0].queryResult;
      
      //respon untuk tumbuhan
      if (result.intent.displayName === "detect-plant") {
        const plant = result.parameters.fields["plant"].stringValue;
        var req = {body:{}};
        req.body = {
          keyword:plant.replace('?','')
        }
        tumbuhan.getTumbuhan(req,function(respone){
          if(respone.data.length > 0){
            scrap.getContentWikipedia(respone.data[0].wikipedia,function(hasil){
              var output = {
                type:"tumbuhan",
                status:true,
                data:hasil,
                result:respone.data[0]
              };
              statistik.getProvinsiPesebaran({body:{id:respone.data[0].id}},function (tumbuhan) {
                  output.provinsi = tumbuhan;
                  pusher.trigger("bot", `${channel_id}`, {
                      message: JSON.stringify(output)
                  });
              })

            })
          }else{
            var output = {
              type:"tumbuhan",
              status:false,
              message:`Saya belum mengetahui apa itu ${plant}.`
            }
            console.dir(JSON.stringify(output));
            pusher.trigger("bot", `${channel_id}`, {
              message: JSON.stringify(output)
            });
          }
        })
        return null;       
      }

      //respon untuk penyakit
      if (result.intent.displayName === "detect_penyakit") {
        const penyakit = result.parameters.fields["penyakit"].stringValue;
        // return pusher.trigger("bot", `${channel_id}`, {
        //   message: `tanaman obat untuk ${penyakit} adalah...`
        // });
        var request = {body:{keyword:penyakit}};
        penyakit_model.getPenyakit(request,function(respone){
          if(respone.length > 0){
            request = {body:{penyakit_id:respone[0].id}}
            penyakit_model.getPenyakitObat(request,function(result){
              if(result.length>0){
                var output ={
                  type:"penyakit",
                  status:true,
                  data:{obat:result}
                }
                console.dir(JSON.stringify(output));
                pusher.trigger("bot", `${channel_id}`, {
                  message: JSON.stringify(output)
                });
              }else{
                var output = {
                  type:"penyakit",
                  status:false,
                  message:`Mohon maaf saya belum mengetahui obat untuk ${penyakit}`
                }
                pusher.trigger("bot", `${channel_id}`, {
                  message: JSON.stringify(output)
                });
              }
            })
          }else{
            var output = {
              type:"penyakit",
              status:false,
              message:`Mohon maaf saya belum mengetahui obat untuk ${penyakit}`
            }
            pusher.trigger("bot", `${channel_id}`, {
              message: JSON.stringify(output)
            });
          }
        });
        return null;
      }

      //respon untuk manfaat
      if (result.intent.displayName === "detect-manfaat") {
        const plant = result.parameters.fields["manfaat"].stringValue;
        var req = {body:{}};
        req.body = {
          keyword:plant.replace('?','')
        }

          tumbuhan.getTumbuhan(req,function(respone){
          if(respone.data.length > 0){
            scrap.getContentHelloSehat(respone.data[0].alodokter,function(hasil){
              var output = {
                type:"manfaat",
                status:true,
                data:hasil,
                result:respone
              };
              pusher.trigger("bot", `${channel_id}`, {
                message: JSON.stringify(output)
              });
            })
          }else{
            pusher.trigger("bot", `${channel_id}`, {
              message: `Saya belum mengerti apa itu ${plant}. Ajarin aku dong.`
            });
          }
        })
        return null;
      }


      //default respon
      var output = {
        status:false,
        message:result.fulfillmentText
      }
      pusher.trigger("bot", `${channel_id}`, {
        message: JSON.stringify(output)
      });
      return null;
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
};

module.exports = processMessage;