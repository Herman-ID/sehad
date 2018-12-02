const async = require("async");
const maps = require("../models/statistic_model");
const rp = require("request-promise");

var appRouter = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get("/api/v1/geojson/",function (req, res) {
        var kode_wilayah = req.query.kode_wilayah;
        var url = "http://cdn.webapps.my.id/geojson_indonesia/"+kode_wilayah+".geojson";
        rp(url)
            .then(function (data) {
                var output = JSON.parse(data.trim());
                res.status(200).json(output);
            })
    })

    app.post("/api/v1/maps/getStatistic",function (req,res) {

        var temp = {};
        maps.getProvinsi(req, function (respone_provinsi) {
            temp = respone_provinsi;
            var result = [];
            pending = 0;
            respone_provinsi.forEach(function (item) {
                var req = {body: {provinsi: item.kode_wilayah}}
                maps.getStatistik(req, function (respon) {
                    var row = {provinsi: item, data: respon};
                    row.geoJson = "http://cdn.webapps.my.id/geojson_indonesia/"+item.kode_wilayah+".geojson";
                    // var row = {respon};
                    result.push(row);
                    if(pending == respone_provinsi.length-1){
                        res.status(200).json(result);
                    }
                    pending ++;
                })
            })
            // res.status(200).send(result);
        })
    })
}

module.exports = appRouter;