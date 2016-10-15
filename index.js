var http = require("http");
var os = require("os");

http.createServer(function (request, response) {

   var html = '<div style="font-size: 50; font-family: Courier New">'+
   '<center>Hello Criciuma Dev!' +
   '<br/><br/>My hostname is: <span style="color: red">'+
   os.hostname()+'</span></center></div>';

   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end(html);
}).listen(80);

console.log('Server is running on port 80');