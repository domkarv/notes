/* 'CodeWithHarry'
https://www.youtube.com/watch?v=bUVYHF6fRbo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg
*/

const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./lib/home.html");
const about = fs.readFileSync("lib/about.html");
const contact = fs.readFileSync("lib/contact.html");

const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });

  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");

  console.log(req.url);

  let url = req.url;

  if (url == "/") res.end(home);
  else if (url == "/about") res.end(about);
  else if (url == "/contact") res.end(contact);
  else {
    res.statusCode = 404;
    res.end("<h1>404: Not Found!</h1>");
  }
});

server.listen(3000, () => {
  console.log(
    "Server running at http://127.0.0.1:3000/ OR http://localhost:3000/"
  );
});
