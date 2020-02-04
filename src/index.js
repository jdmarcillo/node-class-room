// Third party modules
const express = require('express');
const { countries } = require('countries-list');
// Local modules
const { info, error } = require('./modules/my-log');
// Core modules
// const url = require("url");
// const http = require("http");
// const querystring = require("querystring");

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Hello world');
});

app.get('/country', (request, response) => {
  const { query } = request;
  response.json(countries[query.code]);
});

app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});
// var server = http.createServer(function(request, response){

//     let parsed = url.parse(request.url);
//     let pathname = parsed.pathname;
//     let query = querystring.parse(parsed.query);
//     console.log(query);

//     if(pathname === '/'){
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write('<html><body><p>HOME PAGE</p></body></html>');
//         response.end();
//     }else if(pathname === '/status'){
//         var result = info(pathname);
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(result);
//         response.end();
//     }else if(pathname === '/country'){
//         response.writeHead(200, {'Content-Type': 'text/json'});
//         response.write(JSON.stringify(countries[query.code]));
//         response.end();
//     }else{
//         response.writeHead(404, {'Content-Type': 'text/html'});
//         response.write('<html><body><p>NOT FOUND</p></body></html>');
//         response.end();
//     }
// });
app.listen(4000, () => {
  console.log('running on port 4000');
});
