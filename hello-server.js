// Build a server with Node's HTTP module
const http = require('http');
const server = http.createServer();
let port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
}
server.on('request', (request, response) => {
  console.log(`URL: ${request.url}`);
  response.end('Hello, server!')
});

// Start the server
server.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server is listening on port ${port}`)
})