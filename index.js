const http=require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req,res)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h2>Hi! NodeJs</h2></body></html>');
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
}
);