#! /opt/homebrew/bin/node
const http = require('http')

// node hello.js 127.0.0.1 8080
const args = process.argv;
const getConfig = require('./config');


const config = getConfig(args);
const hostname = config.hostname;
const port = config.port;

const server = http.createServer((req, res) => {
    if(req.url && req.url.endsWith('/home')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to home!');
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Invalid request due to bad URL');
    }
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
