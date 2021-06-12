const dgram = require('dgram')
const socket = dgram.createSocket('udp4');

socket.on("message", (msg, info) => {
    console.log(`Message => ${msg} from ${info.address}:${info.port}`);
});

socket.bind("8081");