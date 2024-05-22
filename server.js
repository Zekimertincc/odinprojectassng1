let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;

    if (q.pathname === "/") {
        filename = "./index.html";
    } else if (q.pathname === "/about") {
        filename = "./about.html";
    } else if (q.pathname === "/contact-me") {
        filename = "./contact-me.html";
    }

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080);

console.log("Server is listening on port 8080");
