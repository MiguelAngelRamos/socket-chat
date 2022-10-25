const express = require('express');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

//* io tiene toda la información de los sockets conectados

app.use(express.static('client'));

//* el primer elemento es el "Mensaje de Bienvenida"
const messages = [
  { id: 1, text: 'Bienvenido(a) al Chat privado con Socket.io y NodeJs', nickname: 'BotSocket' }
];

//* Abrir de la conexión de los sockets
io.on('connection', (socket) => {
  //* Esto se va encargar de recibir la conexión de los clientes que ingresen al server
  console.log('Cliente conectado');
  socket.emit('messages', messages);
});
//* Levantamos el Servidor
server.listen(4200, () => {
  console.log(`El Servidor corriendo en http://localhost:4200`);
});