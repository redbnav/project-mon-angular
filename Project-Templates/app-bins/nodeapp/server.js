const express = require("express");
const MongoClient    = require('mongodb').MongoClient;
const bodyParser = require("body-parser");


const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes")(app, {});
//require("./app/models")(app, {});

app.listen(port, () => {
	console.log(" Test we are live at port = "+port);
});
