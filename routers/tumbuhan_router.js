var con = require('../connection/mysql.js');
var async = require('async');


con.connect(function(err){
    if (err) console.log(err);
})

var appRouter = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    /* Api untuk mengambil data tumbuhan
        Jika ingin menampilkan 1 data tambahkan parameter id
        jika ingin mengurutkan data tambahkan parameter ordercolumn untuk value 
                nama -> 0
                latin -> 1
                ordo -> 2
                famili -> 3
                genus -> 4
                species -> 5
            dan untuk shorting asc atau desc tambahkan parameter
            orderdir untuk value adalah asc atau dsc
        jika ingin menampilkan sebagian data bisa menambahkan parameter
            offset
            limit
    */
    app.post('/api/v1/tumbuhan',function(req,res){
        
        var order = ['nama','latin','ordo','famili','genus','species']
        var sql = 'select * from v_tumbuhan';
        if(Object.keys(req.body).length>0){
            if(req.body.id != null){
                sql += " where";
                sql += ' id = '+con.escape(req.body.id)
            }

            if(req.body.keyword != null){
                sql += " where ";
                sql += " nama like "+con.escape("%"+req.body.keyword+"%");
                sql += " or latin like "+con.escape("%"+req.body.keyword+"%");
                sql += " or ordo like "+con.escape("%"+req.body.keyword+"%");
                sql += " or famili like "+con.escape("%"+req.body.keyword+"%");
                sql += " or genus like "+con.escape("%"+req.body.keyword+"%");
                sql += " or spesies like "+con.escape("%"+req.body.keyword+"%");
                console.dir(req.body.keyword);
            }

            if(req.body.ordercolumn != null){
                sql += " order by "+order[req.body.ordercolumn];
                if(req.body.orderdir != null){
                    sql += " "+req.body.orderdir;
                }else{
                    sql += " asc";
                }
            }

            if(req.body.offset!= null && req.body.limit !=null){
                sql += " limit "+req.body.offset+","+req.body.limit;
            }
        }

        var return_value ={};
        async.parallel([
            function(parallel_done){
                con.query(sql,function(err,result,fiend){
                    if (err) {return_value.data=err; return parallel_done(err)};
                    return_value.data=result;
                    parallel_done();
                });
            },
            function(parallel_done){
                con.query("select count(*) as jumlah from v_tumbuhan",function(err,result,fiend){
                    if (err) return parallel_done(err);
                    return_value.totalRows = result[0].jumlah;
                    parallel_done();
                });
            }
        ],function(err) {
            if (err) console.log(err);
            res.status(200).json(return_value);
       });
    });

    /* Api untuk menyimpan data tumbuhan
        Menggunakan method PUT, dengan parameter
        nama -> wajib di isi
        latin -> wajib di isi
        ordo
        famili
        genus
        spesies
    */
    app.put('/api/v1/tumbuhan',function(req,res){
        var nama = req.body.nama;
        var latin = req.body.latin;
        var ordo = req.body.ordo;
        var famili = req.body.famili;
        var genus = req.body.genus;
        var spesies = req.body.spesies;

        var coloumn = '';
        var data = []; 
        if(nama == null){
            res.status(200).send({status:false,message:"Nama tidak boleh kosong"});
            return false;
        }else{
            coloumn += "nama";data.push(nama);
        }

        if(latin == null){
            res.status(200).send({status:false,message:"Nama latin tidak boleh kosong"});
            return false;
        }else{
            coloumn += ",latin";data.push(latin);
        }
        if(ordo != null){ coloumn += ',ordo';data.push(ordo)}
        if(famili != null){ coloumn += ',famili';data.push(famili)}
        if(genus != null){ coloumn += ',genus';data.push(genus)}
        if(spesies != null){ coloumn += ',spesies';data.push(spesies)}

        var sql = "insert into tumbuhan("+coloumn+") values ?";
        con.query(sql,[[data]],function(err,result,field){
            if(err) res.status(200).send({status:false,message:err});
            if(result.affectedRows > 0){
                res.status(200).send({status:true,message:"Data tumbuhan berhasil ditambahkan"});
            }
        })
        //res.status(200).send(data);
    })


    /* Api untuk menghapus data tumbuhan
        Menggunakan Methode DELETE
        parameter yang harus dikirim yaitu id tumbuhan 
        id -> wajib di isi
    */
    app.delete('/api/v1/tumbuhan/',function(req,res){
        var id = req.body.id;
        if(id == null){
            res.status(200).send({status:false,message:"ID tumbuhan can not be null"});
            return false;
        }
        // res.status(200).send({status:false,message:id});
        var sql = "delete from tumbuhan where id = ?";
        con.query(sql,[id],function(err,result){
            if(err) res.status(200).send({status:false,message:err});
            if(result.affectedRows >0){
            res.status(200).send({status:false,message:"Data tumbuhan dengan ID "+id+" Berhasil di hapus"});
            }
        })
    })

    /* Api untuk mengupdate data tumbuhan
        menggunakan method POST
        parameter yang dapat di isi
        id -> wajib di isi
        nama
        latin
        ordo
        famili
        genus
        spesies

        Minimal ada 1 field yang di update
    */
    app.post("/api/v1/tumbuhan/update",function(req,res){
        var nama = req.body.nama;
        var latin = req.body.latin;
        var ordo = req.body.ordo;
        var famili = req.body.famili;
        var genus = req.body.genus;
        var spesies = req.body.spesies;
        var id = req.body.id;

        var coloumn = '';
        var data = []; 
        if(nama != null){coloumn += "nama = ?";data.push(nama);}
        if(latin != null){coloumn += ",latin = ?";data.push(latin);}
        if(ordo != null){ coloumn += ',ordo = ?';data.push(ordo)}
        if(famili != null){ coloumn += ',famili = ?';data.push(famili)}
        if(genus != null){ coloumn += ',genus = ?';data.push(genus)}
        if(spesies != null){ coloumn += ',spesies = ?';data.push(spesies)}
        if(id == null){
            res.status(200).send({status:false,message:"tumbuhan ID tidak boleh kosong"});
            return false;
        }else{
            data.push(id);
        }
        var sql = "update tumbuhan set "+coloumn+" where id = ?"
        con.query(sql,data,function(err,result){
            if(err) res.status(200).send({status:false,message:err});
            if(result.affectedRows > 0){
                res.status(200).send({status:true,message:"Data tumbuhan berhasil diupdate"});
            }
        })
    })

    /* Api untuk menyimpan data link Referensi
        Menggunakan method PUT, dengan parameter
        tumbuhan_id ->wajib di isi
        wikipedia
        alodokter
        unsplash

        Minimal ada 1 field yang di update

    */

    app.put('/api/v1/tumbuhan/link',function(req,res){
        var wikipedia = req.body.wikipedia;
        var alodokter = req.body.alodokter;
        var unsplash = req.body.unsplash;
        var tumbuhan_id = req.body.tumbuhan_id;

        var coloumn = '';
        var data = [];
        if(tumbuhan_id ==null){
            res.status(200).send({status:false,message:"Tumbuhan ID tidak boleh kosong"});
            return false;
        }else{
            coloumn += "tumbuhan_id";
            data.push(tumbuhan_id);
        }
        
        if(wikipedia != null){ coloumn += ",wikipedia";data.push[wikipedia];}
        if(alodokter != null){ coloumn += ",alodokter";data.push[alodokter];}
        if(unsplash != null){ coloumn += ",unsplash";data.push[unsplash];}

        var sql = "insert into tumbuhan_link("+coloumn+") values ?";
        con.query(sql,[[data]],function(err,result){
            if(err) res.status(200).send({status:false,message:"Terjadi Kesalahan dalam menyimpan data."})
            if(result.affectedRows > 0){
                res.status(200).send({status:true,message:"Data Link Tumbuhan berhasil disimpan."})
            }
        })
    });

    /* Api untuk menghapus data Link Referensi
        Menggunakan Methode DELETE
        parameter yang harus dikirim yaitu id tumbuhan 
        tumbuhan_id -> wajib di isi
    */
    app.delete("/api/v1/tumbuhan/link",function(req,res){
        var tumbuhan_id = req.body.tumbuhan_id;
        if(tumbuhan_id == null){
            res.status(200).send({status:false,message:"ID tumbuhan can not be null"});
            return false;
        }
        // res.status(200).send({status:false,message:id});
        var sql = "delete from tumbuhan_link where tumbuhan_id = ?";
        con.query(sql,[tumbuhan_id],function(err,result){
            if(err) res.status(200).send({status:false,message:err});
            if(result.affectedRows >0){
            res.status(200).send({status:false,message:"Data tumbuhan dengan ID "+id+" Berhasil di hapus"});
            }
        })
    })

    /* Api untuk mencari data Tumbuhan
        Menggunakan Method POST, parameter yang dikirim
        Keyword 
    */
    app.post('/api/v1/tumbuhan/search',function(req,res){
        var sql = 'select * from v_tubuhan';
    })
}

module.exports = appRouter;