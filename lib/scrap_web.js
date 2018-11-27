const rp = require('request-promise');
const $ = require('cheerio');

var appScrap = {
    getContentWikipedia:function(url,res){
        var uri = "https://id.wikipedia.org/api/rest_v1/page/html/"+url;
        rp(uri)
        .then (function(html){
            var content = $('#mwAQ > p',html).contents().text();
            var image = $('.infobox > tbody > tr > td img',html).attr("src");
            console.dir(image);
            var output = {
                image : image,
                content : content
            }
            return res(output);
        })
        .catch(function(err){
        if(err)console.dir(err);
        })
    }
}

module.exports = appScrap;