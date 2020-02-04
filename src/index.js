//Core modules
const url = require("url");
const http = require("http");
const querystring = require("querystring");
//Local modules
const { info } = require("./modules/my-log")
//Third party modules
const { countries } = require('countries-list');

var server = http.createServer(function(request, response){

    let parsed = url.parse(request.url);
    let pathname = parsed.pathname;
    let query = querystring.parse(parsed.query);
    console.log(query);

    if(pathname === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<html><body><p>HOME PAGE</p></body></html>');
        response.end();
    }else if(pathname === '/status'){
        var result = info(pathname);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(result);
        response.end();
    }else if(pathname === '/country'){
        response.writeHead(200, {'Content-Type': 'text/json'});
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }else{
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('<html><body><p>NOT FOUND</p></body></html>');
        response.end();
    }
});
server.listen(4000);
console.log("running on port 4000");