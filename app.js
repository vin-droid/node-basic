const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    // console.log(req);
    res.statusCode = 200;
    const { method, url} = req;
    const { headers } = req;

    console.log( "Request method is" + method);
    console.log("Request Path is " + url);

    console.log("Full header    ",  headers);
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hi I'm listennig you.");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});