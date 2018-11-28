const rp = require('request-promise');
const $ = require('cheerio');
const asycn = require("async");

var appScrap = {
    getContentWikipedia:function(url,res){
        var returnValue={};
        asycn.parallel([
            function(parallel_done){
                var uri = "https://id.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsectionformat=wiki&pageimages&redirects=1&titles="+url;
                rp(uri)
                .then (function(html){
                    var jhtml = JSON.parse(html);
                    var pageid = Object.keys(jhtml.query.pages)[0];
                    var data = jhtml.query.pages[pageid].extract;
                    var summary = $('p',data).first().contents().text();
                    returnValue.summary = summary;
                    returnValue.full = data;
                    return parallel_done();
                })
                .catch(function(err){
                if(err)console.dir(err);
                })
            },
            function(parallel_done){
                var uri = "https://id.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages&pithumbsize=300&titles="+url; 
                rp(uri)
                .then (function(html){
                    var jhtml = JSON.parse(html);
                    var pageid = Object.keys(jhtml.query.pages)[0];
                    var data = jhtml.query.pages[pageid].thumbnail.source;
                    returnValue.image = data
                    return parallel_done();
                })
                .catch(function(err){
                if(err)console.dir(err);
                })
            }
        ],function(err,result){
            returnValue.status = true;
            return res(returnValue);
        })
    },
    getContentHelloSehat:function(url,res){
        rp(url)
        .then(function(result){
            var content = $('.entry-content-body',result).html();
            var image = $(".hc2-content-single-featured-image img",result).attr("src");
            var summary = $('p',content).first().html();
            var output = {};
            output.image = image;
            output.summary = summary;
            output.full = content;
            return res(output);
        })
        .catch(function(err){
            if(err)console.dir(err);
        })
    }
}

module.exports = appScrap;