var con = require("../connection/mysql");
var async = require("async");

var appJamu = {
    getDetailJamu:function(req,res){
        var id_jamu = req.body.jamu_id;
        var return_value = {};
        if (id_jamu == null) {
            return res({status: false, message: "Jamu ID can not be null"});
        }
        async.parallel(
        [
            function(parallel_done) {
            var sql = "select * from jamu where id = ?";
            con.query(sql, [id_jamu], function(err, result, field) {
                if (err) return_value.jamu = err;
                return_value.jamu = result[0];
                parallel_done();
            });
            },
            function(parallel_done) {
            var sql = "select * from v_jamu_komposisi where jamu_id = ?";
            con.query(sql, [id_jamu], function(err, result, field) {
                if (err) return_value.jamu.komposisi = err;
                return_value.komposisi = result;
                parallel_done();
            });
            }
        ],
        function(err) {
            if (err) console.log(err);
            return res(return_value);
        }
        );
    },
    searchJamu:function(req,res){
        var keyword = req.body.keyword;
        if(keyword == null){
            return res({status:false,message:"Data Keyword tidak boleh kosong"});
        }
        var sql = "select * from jamu";
        sql += " where nama like "+con.escape("%"+keyword+"%");

        con.query(sql,function(err,result){
            if(err) return res({status:false,message:"terjadi sebuah kesalahan"});
            return res(result);
        })
    },
    saveJamu:function(req,res){
        nama = req.body.nama_jamu;

        if (nama == null) {
        return res({ status: false, message: "Nama Jamu tidak boleh kosong." });
        }
        var data = [[nama]];
        var sql = "insert into jamu(nama) values ?";
        con.query(sql, [data], function(err, result) {
        if (err) return res(err);
        return res({ status: true, message: "Data Jamu berhasil disimpan" });
        });
    },
    deleteJamu:function(req,res){
        var jamu_id = req.body.jamu_id;
    if (jamu_id == null) {
      res
        .status(200)
        .send({ status: false, message: "ID jamu can not be null" });
      return false;
    }
    // res.status(200).send({status:false,message:id});
    var sql = "delete from jamu where id = ?";
    con.query(sql, [jamu_id], function(err, result) {
      if (err) return res({ status: false, message: err });
      if (result.affectedRows > 0) {
        return res({
            status: false,
            message: "Data jamu dengan ID " + jamu_id + " Berhasil di hapus"
          });
      }
    });
    },
    updateJamu:function(req,res){
        jamu_id = req.body.jamu_id;
    nama = req.body.nama_jamu;

    if (nama == null) {
      res
        .send(500)
        .send({ status: false, message: "Nama Jamu tidak boleh kosong." });
      return false;
    }
    if (jamu_id == null) {
      res
        .send(500)
        .send({ status: false, message: "ID Jamu tidak boleh kosong." });
      return false;
    }
    var sql = "update jamu set nama = ? where jamu_id = ?";
    con.query(sql, [nama, jamu_id], function(err, result) {
      if (err) return res(err);
      return res({ status: true, message: "Data Jamu berhasil diupdate" });
    });
    },
    saveKomposisi:function(req,res){
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
            .status(500)
            .send({ status: false, message: "ID Tumbuhan tidak boleh kosong." });
        return false;
        }
        var data = [jamu_id, tumbuhan_id];
        var sql = "insert into jamu_komposisi(jamu_id,tumbuhan_id) values ?";
        con.query(sql, [data], function(err, result) {
        if (err) return res(err);
        return res({
            status: true,
            message: "Data Komposisi Jamu berhasil disimpan"
        });
        });
    }
}

module.exports = appJamu;