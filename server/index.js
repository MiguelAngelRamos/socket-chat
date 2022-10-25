const express = require('express');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

//* io tiene toda la información de los sockets conectados

app.use(express.static('client'));

//* Levantamos el Servidor
server.listen(4200, () => {
  console.log(`El Servidor corriendo en http://localhost:4200`);
});