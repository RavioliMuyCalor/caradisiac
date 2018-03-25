const express = require('express');

var client = require('./connection.js');
var search = require('./search.js');
var add_suv = require('./add_suv.js');

const app = express();
const port = 9292;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/populate', (req, res) => {
	console.log("Populating");
	add_suv();
});

app.get('/api/cars', (req, res) => {
	console.log("Searching");
	var result = search();
	//res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));