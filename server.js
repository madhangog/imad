var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0 ;
app.get('/counter', function (req, res) {
	counter = counter +1;
	res.send("count = "+counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/maddy.jpg', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'maddy.jpg'));
});
 var names = [];
app.get('/submitname', function (req, res) {

	//submitname?name=XXX
	//get the name from request
	var name = req.query.name;
	names.push(name);
	//JSON : javascript object notatopon
 	res.send(JSON.stringify(names));
});



var port = 8080; // Use 8080 for local development[	] because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`MADDY  listening on port ${port}!`);
});
 