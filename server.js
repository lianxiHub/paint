
var http = require('http');
var fs = require("fs");

var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }
})


var io = require("socket.io")(server);
io.on("connection",function(socket){
    console.log("新连接");
    socket.on("play",function(msg){
        io.emit('answer',msg);
    })
})


server.listen(3000,"127.0.0.1");