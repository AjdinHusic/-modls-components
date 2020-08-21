var static = require('node-static');

var file = new static.Server('./src');

require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
}).listen(8080);

console.log("app listening on http://127.0.0.1:8080");