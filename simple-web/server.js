const http = require('http');
//web server
//apache

const port = 3001;

const server=http.createServer((request, response)=>{
    response.statusCode=200
})
