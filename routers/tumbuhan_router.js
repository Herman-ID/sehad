var con = require("../connection/mysql.js");
var scrap = require("../lib/scrap_web");
var tumbuhan = require("../models/tumbuhan_model"); //Pengambilan data dari model.
var scrap = require("../lib/scrap_web");
const statistik = require("../models/statistic_model");

// con.connect(function(err){
//     if (err) console.log(err);
// })

var appRouter = function(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/v1/test_model", function (req, res) {
        tumbuhan.testFun({body: {key1: 1}});
        res.status(200).send(null);
    });

    /* Api untuk mengambil data tumbuhan
          Jika ingin menampilkan 1 data tambahkan parameter id
          jika ingin mengurutkan data tambahkan parameter ordercolumn untuk value
                  nama -> 0
                  latin -> 1
                  ordo -> 2
                  famili -> 3
                  genus -> 4
                  species -> 5
              dan untuk shorting asc atau desc tambahkan parameter
              orderdir untuk value adalah asc atau dsc
          jika ingin menampilkan sebagian data bisa menambahkan parameter
              offset
              limit
      */
    app.post("/api/v1/tumbuhan", function (req, res) {
        tumbuhan.getTumbuhan(req, function (respone) {
            res.status(200).json(respone);
        });
    });

    app.get("/api/v1/tumbuhan",function (req, res) {

        var request = {body:{offset:req.query.offset,limit:req.query.limit,keyword:req.query.keyword,id:req.query.id}};
        tumbuhan.getTumbuhan(request,function(respone){
            if(respone.data.length > 0){
              // res.status(200).send(respone);
              var output = [];
              var pending = 0;
                respone.data.forEach(function (item) {
                    scrap.getContentWikipedia(item.wikipedia,function(hasil){
                        var row = {
                            type:"tumbuhan",
                            status:true,
                            summary:hasil.summary,
                            image:hasil.image,
                            result:item
                        };
                        statistik.getProvinsiPesebaran({body:{id:item.id}},function (tumbuhan) {
                            row.provinsi = tumbuhan;
                            console.log(tumbuhan);
                            output.push(row);
                            if(pending === respone.data.length -1){
                                res.status(200).json(output);
                            }
                            pending ++;
                        })
                    })
                })
            }else{
                var output = {
                    type:"tumbuhan",
                    status:false,
                    message:`data tidak tersedia`
                }
                console.dir(JSON.stringify(output));
                pusher.trigger("bot", `${channel_id}`, {
                    message: JSON.stringify(output)
                });
            }
        })
    })

    /* Api untuk menyimpan data tumbuhan
          Menggunakan method PUT, dengan parameter
          nama -> wajib di isi
          latin -> wajib di isi
          ordo
          famili
          genus
          spesies
      */
    app.put("/api/v1/tumbuhan", function (req, res) {
        tumbuhan.saveTumbuhan(req, function (respone) {
            res.status(200).send(respone);
        });
        //res.status(200).send(data);
    });

    /* Api untuk menghapus data tumbuhan
          Menggunakan Methode DELETE
          parameter yang harus dikirim yaitu id tumbuhan
          id -> wajib di isi
      */
    app.delete("/api/v1/tumbuhan/", function (req, res) {
        tumbuhan.deleteTumbuhan(req, function (respone) {
            res.status(200).send(respone);
        });
    });

    /* Api untuk mengupdate data tumbuhan
          menggunakan method POST
          parameter yang dapat di isi
          id -> wajib di isi
          nama
          latin
          ordo
          famili
          genus
          spesies

          Minimal ada 1 field yang di update
      */
    app.post("/api/v1/tumbuhan/update", function (req, res) {
        tumbuhan.updateTumbuhan(req, function (respon) {
            res.status(200).send(respon);
        });
    });

    /* Api untuk menyimpan data link Referensi
          Menggunakan method PUT, dengan parameter
          tumbuhan_id ->wajib di isi
          wikipedia
          alodokter
          unsplash
      */

    app.put("/api/v1/tumbuhan/link", function (req, res) {
        tumbuhan.saveLink(req, function (respone) {
            res.status(200).send(respone);
        });
    });

    /*
      Api untuk menghapus data Link Referensi
          Menggunakan Methode DELETE
          parameter yang harus dikirim yaitu id tumbuhan
          tumbuhan_id -> wajib di isi
      */
    app.delete("/api/v1/tumbuhan/link", function (req, res) {
        tumbuhan.deleteLink(req, function (respone) {
            res.status(200).send(respone);
        });
    });
}
module.exports = appRouter;
