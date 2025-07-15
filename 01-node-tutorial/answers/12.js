const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.end("welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("learn more about our story");
  } else {
    res.end("page not found");
  }
});

server.listen(3000);
