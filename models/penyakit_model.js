var con = require("../connection/mysql");
var asycn = require("async");

var modelPenyakit = {
    getPenyakit = function(req,res){
        var keyword = req.body.keyword;
        var penyakit_id = req.body.penyakit_id;

        var sql = "select * from penyakit";

        if(penyakit_id != null){
            sql += " where penyakit_id = "+con.escape(penyakit_id);
        }

        if(keyword != null){
            sql += " where nama like "+ con.escape("%"+keyword+"%");
            sql += " or keyword like "+ con.escape("%"+keyword+"%");
        }

        con.query(sql,function(err,result){
            if(err) return res(err);
            return res(result);
        })
    },
    getPenyakitObat:function(req,res){
        var sql = "select * from v_penyakit_obat ";
        var id = req.body.penyakit_id;
        if( id != null){
            sql += " where penyakit_id = "+con.escape()
        }

        con.query(sql,function(err,result){
            if(err) return res(err);
            return res(result);
        })
    }
}

module.exports = modelPenyakit;