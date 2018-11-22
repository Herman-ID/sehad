var con = require('../connection/mysql');
var async = require('async');


var appRouter = function(app){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.post("/api/jamu/",function(req,res){
        res.status(200).json({message:"berhasil"});
    })

    app.post("/api/detailjamu",function(req,res){
        var id_jamu = req.body.jamu_id;
        var return_value = {};
        if(id_jamu == null){
            res.status(500).send({status:false,message:"Jamu ID can not be null"});
        }
        async.parallel([
            function(parallel_done){
                var sql = "select * from jamu where id = ?";
                con.query(sql,[id_jamu],function(err,result,field){
                    if(err) return_value.jamu = err;
                    return_value.jamu = result;
                    parallel_done();
                })
            },
            function(parallel_done){
                var sql = "select * from v_jamu_komposisi where jamu_id = ?";
                con.query(sql,[id_jamu],function(err,result,field){
                    if(err) return_value.jamu.komposisi = err;
                    return_value.komposisi = result;
                    parallel_done();
                })
            }
        ],function(err){
            if (err) console.log(err);
            res.status(200).json(return_value);
        })
    })

    app.put("/api/jamu/",function(req,res){
        nama = req.body.nama_jamu;

        if(nama == null){
            res.send(500).send({status:false,message:"Nama Jamu tidak boleh kosong."});
            return false;
        }
        var data = [[nama]];
        var sql = "insert into jamu(nama) values ?";
        con.query(sql,[data],function(err,result){
            if(err) res.status(500).send(err);
            res.status(200).send({status:true,message:"Data Jamu berhasil disimpan"});
        })
    })

    app.delete('/api/jamu/',function(req,res){
        var jamu_id = req.body.jamu_id;
        if(jamu_id == null){
            res.status(200).send({status:false,message:"ID jamu can not be null"});
            return false;
        }
        // res.status(200).send({status:false,message:id});
        var sql = "delete from jamu where id = ?";
        con.query(sql,[jamu_id],function(err,result){
            if(err) res.status(200).send({status:false,message:err});
            if(result.affectedRows >0){
            res.status(200).send({status:false,message:"Data jamu dengan ID "+jamu_id+" Berhasil di hapus"});
            }
        })
    })

    app.post("/api/jamu/update",function(req,res){
        jamu_id = req.body.jamu_id;
        nama = req.body.nama_jamu;

        if(nama == null){
            res.send(500).send({status:false,message:"Nama Jamu tidak boleh kosong."});
            return false;
        }
        if(jamu_id == null){
            res.send(500).send({status:false,message:"ID Jamu tidak boleh kosong."});
            return false;
        }
        var sql = "update jamu set nama = ? where jamu_id = ?";
        con.query(sql,[nama,jamu_id],function(err,result){
            if(err) res.status(500).send(err);
            res.status(200).send({status:true,message:"Data Jamu berhasil diupdate"});
        })
    })

    app.put("/api/jamu/komposisi",function(req,res){
        jamu_id = req.body.jamu_id;
        tumbuhan_id = req.body.tumbuhan_id;

        if(jamu_id == null){
            res.send(500).send({status:false,message:"ID Jamu tidak boleh kosong."});
            return false;
        }
        if(tumbuhan_id == null){
            res.send(500).send({status:false,message:"ID Tumbuhan tidak boleh kosong."});
            return false;
        }
        var data = [jamu_id,tumbuhan_id];
        var sql = "insert into jamu_komposisi(jamu_id,tumbuhan_id) values ?";
        con.query(sql,[data],function(err,result){
            if(err) res.status(500).send(err);
            res.status(200).send({status:true,message:"Data Komposisi Jamu berhasil disimpan"});
        })
    })

    app.get("/api/testasync",function(req,res){
        // var return_value = {};
        // async.parallel({
        //     one:function(parallel_done){
        //         var sql = "select * from jamu";
        //         con.query(sql,function(err,result,field){
        //             if(err) return_value.jamu = err;
        //             return_value.jamu = result;
        //             parallel_done(err,result);
        //         })
        //     },
        //     two:function(pararel_done) {
        //         pararel_done(null,{ini:"contoj:"});
        //     }
        // },function(err,result){
        //     if (err) console.log(err);
        //         res.status(200).json(result);
        // })

        var sql = "select * from jamu";
        con.query(sql,function(err,result){
            console.log(result);
        });
        res.send({work:true})
        
    })
}

module.exports = appRouter;