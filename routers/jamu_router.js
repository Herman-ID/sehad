var con = require("../connection/mysql");
var jamu = require("../models/jamu_model");

var appRouter = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/v1/jamu/", function(req, res) {
    jamu.getJamu(req,function (stat) {
        res.status(200).json(stat);
    })
  });

  /*
  * Api untuk get data jamu
  * Parameter yang harus diisi jamu_id
  * */
  app.post("/api/v1/detailjamu", function(req, res) {
    jamu.getDetailJamu(req,function(respone){
      res.status(200).json(respone);
    })
  });

  /*
  * Api untuk menyimpan data jamu
  * Paramter yang harus di isi nama_jamu -> tidak boleh null
  * */
  app.put("/api/v1/jamu/", function(req, res) {
    jamu.saveJamu(req,function(respone){
      res.send(200).json(respone);
    })
  });

  /*
  * Api untuk menghapus data jamu
  * Parameter yang harus di isi jamu_id -> tidak boleh null
  * */
  app.delete("/api/v1/jamu/", function(req, res) {
    jamu.deleteJamu(req,function(respone){
      res.status(200).json(respone);
    })
  });

  /*
  * Api
  * */
  app.post("/api/v1/jamu/update", function(req, res) {
    jamu.updateJamu(req,function(res){
      res.status(200).json(respone);
    })
  });

  app.put("/api/v1/jamu/komposisi", function(req, res) {
    jamu.saveKomposisi(req,function(respone){
      res.status(200).json(respone);
    })
  });

  app.delete("/api/v1/jamu/komposisi", function(req, res) {
    jamu_id = req.body.jamu_id;
    tumbuhan_id = req.body.tumbuhan_id;

    if (jamu_id == null) {
      res
        .send(500)
        .send({ status: false, message: "ID Jamu tidak boleh kosong." });
      return false;
    }
    if (tumbuhan_id == null) {
      res
        .send(500)
        .send({ status: false, message: "ID Tumbuhan tidak boleh kosong." });
      return false;
    }
    var data = [jamu_id, tumbuhan_id];
    var sql =
      "delete from jamu_komposisi where jamu_id = ? and tumbuhan_id = ?";
    con.query(sql, [data], function(err, result) {
      if (err) res.status(500).send(err);
      res.status(200).send({
        status: true,
        message: "Data Komposisi Jamu berhasil dihapus"
      });
    });
  });
};

module.exports = appRouter;
