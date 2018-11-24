// file    : routers/chat.js
//         : router untuk chat api

const processMessage = require("../lib/process-message");

var appRouter = function(app) {
  app.post("/api/v1/chat", (req, res) => {
    const { message } = req.body;
    console.log(message);
    processMessage(message);
    res.status(200).send({success:true});
  });
};

module.exports = appRouter;
