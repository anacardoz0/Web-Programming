const express = require('express');
const app = express();

var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
res.setHeader("charset","UTF-8");
res.writeHead(200, {'Content-Type':'text/html'});
res.write("<html><head><title>Query String</title></head><body>");
var querystring = url.parse(req.url, true).query
for(var i in querystring){
res.write("<p>" + i + ": " + querystring[i] + "</p>");
}
res.end("</body>");
})
app.listen(8080);

/*http://localhost:8080/a.b?c=d&e=f&g=2
*/ 