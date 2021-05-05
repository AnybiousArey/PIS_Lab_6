const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Contact-Type", "text/html; charset=utf-8;");

    if (req.url === "/is-93-011" || req.url === "/"){
        res.write("Andrew Kot IS-93 Course 2");
    }

    else{
        res.write("Wrong input")
    }

    res.end();
}).listen(3000)