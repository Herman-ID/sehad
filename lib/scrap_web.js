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
            return res(returnValue);
        })
    },
    getContentAloDokter:function(url,res){
        rp(url)
        .then(function(result){
            var content = $("#postContent>html>body",result).html();
            
            console.dir("image \n"+content);
            // var output = {image:image,summary:summary,full:content};
            return res({result:true});
        })
        .catch(function(err){
            if(err)console.dir(err);
        })
    }
}

module.exports = appScrap;