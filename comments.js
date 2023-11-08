// Create web server application

// Load HTTP module
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const { parse } = require("querystring");
const { parse } = require("path");
const { stringify } = require("querystring");
const { stringify } = require("path");

// Create HTTP server and listen on port 8000 for requests
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/html" });

  // Set the response body "Hello World"
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Comments</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Comments</h1>");
  res.write("<form action='/' method='POST'>");
  res.write("<label>Name:</label>");
  res.write("<input type='text' name='name' />");
  res.write("<br />");
  res.write("<label>Comment:</label>");
  res.write("<textarea name='comment'></textarea>");
  res.write("<br />");
  res.write("<input type='submit' value='Post Comment' />");
  res.write("</form>");
  res.write("</body>");
  res.write("</html>");

  // Send the response body "Hello World"
  res.end();
});

// Prints a log once the server starts listening
server.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});