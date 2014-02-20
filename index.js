var http = require("http");

var port = Number(process.env.PORT || 5000);

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(port);

console.log("App ready at port "+port);