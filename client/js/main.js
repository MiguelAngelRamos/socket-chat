const socket = io();

socket.on('connect', () => {
  console.log('Conectado al Servidor');
});

//* Recibiendo el evento del servidor

socket.on('messages', (data) => {
  console.log(data);
  render(data);
})

//* Una función para renderizar el contenido que nos envia el servidor en el index.html
//* data un array, podemos utilizar el método map
const render = data => {
  const html = data.map((message) => {
    return (`
      <div class="message">
        <strong>${message.nickname}</strong> dice:
        <p>${message.text} </p>
      </div>   
    `)
  }).join(' '); //* para tener un espacio entre los elementos

  document.querySelector('#messages').innerHTML = html;
}

//* tomamos la referencia del formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', addMessage);

function addMessage(event) {
  event.preventDefault();
  // console.log('formulario');
  //* creamos un objeto el cual vamos a enviar al servidor
  const message = {
    nickname: document.querySelector('#nickname').value,
    text: document.querySelector('#text').value
  };
  //* para que no pueda cambiar el nombre una vez que envia el mensaje
  document.querySelector('#nickname').style.display = 'none';
  // console.log(message);
  //* vamos a emitir un mensaje al servidor de sockets
  socket.emit('add-message', message);
  //* Para limpiar el text area
  document.querySelector('#text').value = '';
  
}