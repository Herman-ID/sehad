var con = require("../connection/mysql");
var async = require("async");

/*setiap function memiliki 2 parameter,
    parameter req sebagai input
    parameter res sebagai output/callback
*/
var tumbuhan_model = {
    getTumbuhan : function(req,res){
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
                sql += " or keyword like "+con.escape("%"+req.body.keyword+"%");
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
        console.dir(sql);
        var return_value ={};
        async.parallel([
            function(parallel_done){
                con.query(sql,function(err,result,fiend){
                    if (err){console.dir(err)}
                    else{
                        return_value.data=result;
                    };
                    parallel_done();
                });
            },
            function(parallel_done){
                con.query("select count(*) as jumlah from v_tumbuhan",function(err,result,fiend){
                    if (err){console.dir(err)}
                    else{
                        return_value.totalRows = result[0].jumlah;
                        parallel_done();
                    };
                    
                });
            }
        ],function(err) {
            //if (err) console.log(err);
            // console.dir(return_value)
            return res(return_value);
       });
    },
    saveTumbuhan : function(req,res){
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
                return res({status:true,message:"Data tumbuhan berhasil ditambahkan"});
            }
        })
    },
    deleteTumbuhan:function(req,res){
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
                return res({status:false,message:"Data tumbuhan dengan ID "+id+" Berhasil di hapus"});
            }
        })
    },
    updateTumbuhan:function(req,res){
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
                return res({status:true,message:"Data tumbuhan berhasil diupdate"});
            }
        })
    },
    saveLink:function(req,res){
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
                return res({status:true,message:"Data Link Tumbuhan berhasil disimpan."});
            }
        })
    },
    deleteLink:function(req,res){
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
            return res({status:false,message:"Data tumbuhan dengan ID "+id+" Berhasil di hapus"});
            }
        })
    },
    testFun:function(req,res){
        console.log(req.body.key1)
    }
}

module.exports = tumbuhan_model;