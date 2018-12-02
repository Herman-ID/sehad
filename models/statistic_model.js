const con = require("../connection/mysql");
const async = require("async");

var statisticModel = {
    getStatistik:function (req,res) {
        var provinsi = req.body.provinsi;
        var returnvalue= {};

        async.parallel([
            function (pararel_done) {
                var sql = "select count(nama) as jumlah_tumbuhan, nama_provinsi from v_tumbuhan ";
                if(provinsi != null){
                    sql += "where provinsi = ?";
                }
                con.query(sql,[provinsi],function (err, result) {
                    if(err) pararel_done(err);
                    returnvalue.jumlah_tanaman = result[0].jumlah_tumbuhan;
                    pararel_done();
                })
            },
            function (pararel_done) {
                var sql = "select count(ordo) as jumlah_tanaman , ordo from v_tumbuhan ";
                if(provinsi != null){
                    sql += "where provinsi = ?";
                }
                sql += "group by ordo";
                con.query(sql,[provinsi],function (err,result) {
                    if(err) pararel_done(err);
                    returnvalue.ordo = {jumlah_ordo:result.length,data:result}
                    pararel_done();
                })
            },
            function (pararel_done) {
                var sql = "select count(famili) as jumlah_tanaman, famili from v_tumbuhan ";
                if(provinsi != null){
                    sql += "where provinsi = ?";
                }
                sql += "group by famili";
                con.query(sql,[provinsi],function (err,result) {
                    if(err) pararel_done(err);
                    returnvalue.famili = {jumlah_famili:result.length,data:result}
                    pararel_done();
                })
            },
            function (pararel_done) {
                var sql = "select count(genus) as jumlah_tanaman, genus from v_tumbuhan ";
                if(provinsi != null){
                    sql += "where provinsi = ?";
                }
                sql += "group by genus";
                con.query(sql,[provinsi],function (err,result) {
                    if(err) pararel_done(err);
                    returnvalue.genus = {jumlah_genus:result.length,data:result}
                    pararel_done();
                })
            }
        ],function (err) {
            return res(returnvalue);
        })
    },
    getProvinsi:function (req,res) {
        var provinsi = req.body.provinsi;
        var sql = "select * from ref_provinsi";
        if(provinsi != null){
            sql += " where kode_wilayah = ?";
        }
        con.query(sql,[provinsi],function (err,result) {
            if(err) return res(err);
            return res(result);
        })
    },
}

module.exports = statisticModel;