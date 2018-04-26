const http = require('http');
const host = 'localhost';
const port = 3000;
const app = require('./app');

const server = http.createServer(app);

server.listen(port, host, () => {
    console.log('Server Running !!!');
});

