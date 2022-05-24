
// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);


// const mysql = require('mysql');

// // First you need to create a connection to the database
// // Be sure to replace 'user' and 'password' with the correct values
// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password: 'password',
// });

// con.connect((err) => {
//     if (err) {
//         console.log('Error connecting to Db');
//         return;
//     }
//     console.log('Connection established');
// });

// con.end((err) => {
//     // The connection is terminated gracefully
//     // Ensures all remaining queries are executed
//     // Then sends a quit packet to the MySQL server.
// });

class Greeting {
    greet(): void {
        console.log("Hello World")

    }

}

var obj = new Greeting();
obj.greet();