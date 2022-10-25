const socket = io();

socket.on('connect', () => {
  console.log('Conectado al Servidor');
});

//* Recibiendo el evento del servidor

socket.on('messages', (data) => {
  console.log(data);
})