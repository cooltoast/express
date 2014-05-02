var express = require("express");
var ejs = require("ejs");
var app = express();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('facts.db');



///////////////////////////////////////////////////////////////////////////////
// APP CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
//configure logging
app.use(express.logger());
//make files in static folder publicly accessible
app.use('/static', express.static(__dirname + '/static'));
//use ejs for html templates
app.engine('html', ejs.renderFile);

var facts = ["The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had.", "The most money ever paid for a cow in an auction was $1.3 million.", "The highest point in Pennsylvania is lower than the lowest point in Colorado.", "The average person spends about 2 years on the phone in a lifetime."];


///////////////////////////////////////////////////////////////////////////////
// APP ROUTES                                                                //
///////////////////////////////////////////////////////////////////////////////
//default route
app.get('/', function(req, res) {
  res.render('index.html', { });
});

app.get('/calc', function(req, res) {
  res.render('calc.html', { });
});

app.get('/stuff', function(req, res) {
  res.render('stuff.html', { });
});

app.get('/imgrr', function(req, res) {
  res.render('imgrr.html', { });
});

app.get('/canvas', function(req, res) {
  res.render('canvas.html', { });
});

app.get('/funcs', function(req, res) {
  res.render('funcs.html', { });
});

app.get('/ball', function(req, res) {
  res.render('ball.html', { });
});

app.get('/chain-reaction', function(req, res) {
  res.render('chain_reaction.html', { });
});

app.get('/fact', function(req, res) {
  res.render('fact.html', { fact: facts[Math.floor(Math.random() * facts.length)] });
});

app.get('/random_fact', function(req, res) {
  db.get('SELECT * FROM fact_table ORDER BY RANDOM()', function(err, item) {
   // render page here
   res.render('fact.html', { fact: item.fact_str });
  });

  
});

app.get('/submit_fact', function(req, res) {
  var fact = req.query['fact'];
  db.run('INSERT INTO fact_table VALUES ("' + fact + '")');
  
  //facts.push(fact);
  res.redirect('/fact');
  
});

app.get('/facts', function(req, res) {
  res.render('facts.html', { facts: facts });
});




///////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
