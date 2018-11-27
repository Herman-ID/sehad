const rp = require('request-promise');
const $ = require('cheerio');

var appScrap = {
    getContentWikipedia:function(url,res){
        rp(url)
        .then (function(html){
            var content = $('#mw-content-text > .mw-parser-output > p',html).contents().text();
            var message = content.substr(0, content.indexOf('\n'));
            return res(message);
        })
        .catch(function(err){
        if(err)console.dir(err);
        })
    }
}

module.exports = appScrap;