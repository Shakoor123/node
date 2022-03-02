// var express = require("express");
// const mysql = require("mysql");
// var router = express.Router();
 
// const dbConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   // "mysql://dbuserfornode:password@c165535e-f52f-499e-b60e-e941d602d2e0.test02-1296.mysql.dbs.scalingo.com:37082/test?useSSL=true&verifyServerCertificate=false"
//   database: "node",
// });
 
// dbConnection.connect((err) => {
//   if (err) throw err;
//   else console.log("connected to database");
// });
 
// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", {
//     title: "Express",
//     dummyData: "lorem ipsum ",
//   });
// });
 
// router.get("/login", (req, res) => {
//   console.log(req.url);
//   res.end("login route");
// });
 
// router.post("/signup", (req, res) => {
//   console.log(req.body);
//   console.log(req.body.email);
 
//   const dbSearchQuery = `SELECT * FROM user01 WHERE email = '${req.body.email}'`;
//   dbConnection.query(dbSearchQuery, (err, searchResult) => {
//     console.log(searchResult.length);
//     console.log("db search result : ", searchResult);
 
//     if (searchResult.length > 0) {
//       console.log("user already exists");
//       res.end("user already exists");
//       return;
//     } else {
//       const dbInsertQuery = `insert into user01 (name, email, password) values ('${req.body.username}', '${req.body.email}', '${req.body.password}')`;
//       dbConnection.query(dbInsertQuery, (err, result) => {
//         console.log("db log");
//         console.log(err);
//         console.log(result);
//         res.end(`signup ${JSON.stringify(req.body)}`);
//       });
//     }
//   });
// });
 
// router.post("/login", (req, res) => {
//   const dbSearchUserQuery = `SELECT * FROM user01 WHERE email = '${req.body.email}'`;
//   dbConnection.query(dbSearchUserQuery, (err, userList) => {
//     if (err) {
//       console.log("error in db search");
//       throw err;
//     }
//   });
// });
 
// module.exports = router;