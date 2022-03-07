var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shakoor@2786',
  database: 'placement1'
})
connection.connect(function (err) {
  if (err) throw err
  console.log('You are now connected...')

})



/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index');
});

//signup page
router.get('/signup', function (req, res, next) {
  res.render('signup');
});
// put into database
router.post('/signup', (req, res) => {
  console.log(req.body);

  var sql = `INSERT INTO student (id,name,branch) VALUES ("${req.body.id}","${req.body.name}","${req.body.branch}")`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  })

  res.render('login')
})
//select into database

router.get('/select', (req, res) => {
  connection.query("SELECT * FROM student", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.render('select', { result });

  });


})


//login operation
router.get('/login', function (req, res, next) {
  res.render('login');
});


router.post('/login', (req, res) => {
  console.log(req.body);

  connection.query(`SELECT name FROM student where id="${req.body.id}"`, function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].name);
    console.log(req.body.name);
    if(result[0].name==req.body.name){
      res.render('index')
    }else{
      res.send("invalid userid or name")
    }

  });

})
















module.exports = router;
