var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'placement'
})
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/signup',(req,res)=>{
  console.log(req.body);
  console.log(req.body.id);

  var sql = `INSERT INTO student (id,name,branch) VALUES ("${req.body.id}","${req.body.name}","${req.body.branch}")`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  })
  
  res.render('login')
})
module.exports = router;
