const express = require('express');
var bodyParser = require("body-parser");
var tumbuhan_routes = require('./routers/tumbuhan_router.js');
var jamu_router = require('./routers/jamu_router');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    const customers = [
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });
  
tumbuhan_routes(app);
jamu_router(app);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);