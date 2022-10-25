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