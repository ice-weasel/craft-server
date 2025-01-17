const http = require('http');
const port = 3000;

const server = http.createServer(function(req,res) {
    res.writeHead(200)
    res.write('Hello Node')
    res.end()
})

server.listen(port, function(error) {
    if(error){
        console.log("some error",error);
    }
    else {
        console.log("server listening ",port);
    }
})