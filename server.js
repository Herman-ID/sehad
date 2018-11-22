require("dotenv").config({ path: "process.env" });

const express = require("express");
var bodyParser = require("body-parser");
var tumbuhan_routes = require("./routers/tumbuhan_router.js");
var jamu_router = require("./routers/jamu_router");
const cors = require("cors");
const processMessage = require("./process-message");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/chat", (req, res) => {
  const { message } = req.body;
  processMessage(message);
});

tumbuhan_routes(app);
jamu_router(app);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
