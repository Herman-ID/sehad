const statistic = require("../models/statistic_model");

var klasifikasiRouter = function (app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.post("/api/v1/getKlasifikasi",function (req, res) {
        statistic.getStatistik(req, function (respon) {
            var row = respon;
            if(req.body.provinsi != null){
                row.geoJson = "http://cdn.webapps.my.id/geojson_indonesia/"+req.body.provinsi+".geojson";
            }
                res.status(200).json(row);
        })
    })
}

module.exports = klasifikasiRouter;