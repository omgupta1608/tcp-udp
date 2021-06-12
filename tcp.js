const net = require('net');

const server = net.createServer(socket => {
    socket.write('Welcome!');
    socket.on("data", data => {
        console.log(data);
    });
});

server.listen('8080')
