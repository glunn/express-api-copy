// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
let port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
}

 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
 
routes(app);
 
app.listen(port);
// Start the server
// const server = app.listen(port, (error) => {
//     if (error) return console.log(`Error: ${error}`);
// 
//     console.log(`Server listening on port ${server.address().port}`);
// });