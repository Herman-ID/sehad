// file ini digunakan untuk penyatuan server

// library javascript
const express = require("express");
const cors = require("cors");
const app = express();
const con = require("./connection/mysql");
const bodyParser = require("body-parser");

// import class
const tumbuhan_routes = require("./routers/tumbuhan_router.js");
const jamu_router = require("./routers/jamu_router");
const chat_router = require("./routers/chat");
const maps_api = require("./routers/maps_router.js");
const klasifikasi_router = require("./routers/klasifikasi_router");
const port = 5000;

// definisi pengembalian API
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//melakukan router ke setiap jenis router
tumbuhan_routes(app);
maps_api(app);
jamu_router(app);
chat_router(app);
klasifikasi_router(app);

// connect to database
con.connect(function(err) {
  if (err) console.dir(err);
});
app.listen(port, () => `Server di jalankan pada ${port}`);
