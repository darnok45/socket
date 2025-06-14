const socket = io();
const rightWindow = document.querySelector('.right-window');
const btn_new = document.querySelector('.new-turn button');
const btn_call = document.querySelector('.call-turn button')
const actualTurn = document.querySelector('.actual-turn h2')

socket.on('connect', () => {
  console.log("Conectado al servidor")
});

btn_new.addEventListener('click', () => {
  socket.emit('newTurn');
});

btn_call.addEventListener('click', () => {
  socket.emit('callTurn')
})

socket.on('newTurnEmitted', (turn) => {
  const table = document.createElement('table');
  const fila1 = document.createElement('tr');
  const th = document.createElement('th');
  th.textContent = `Turno: N°${turn.numero}`
  fila1.appendChild(th);

  const fila2 = document.createElement('tr');
  const td = document.createElement('td');
  td.textContent = `Tiempo de espera: 0 minutos`;
  fila2.appendChild(td);

  table.appendChild(fila1);
  table.appendChild(fila2);
  rightWindow.appendChild(table);

  const intervalo = setInterval(() => {
    const minutos = Math.floor((Date.now() - turn.timestamp) / 60000);
    td.textContent = `Tiempo de espera: ${minutos} minutos`;
  }, 60000)

  if(sonido){
    sonido.play().catch(e => {
      console.log("No se pudo reproducir el sonido automaticamente: ", e)
    })
  }

  const tablas = rightWindow.querySelectorAll('table');
  if(tablas.length > 3) {
    rightWindow.removeChild(tablas[0]);
  }
})