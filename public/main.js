const socket = io();

  socket.on('connect', () => {
    console.log("Conectado al servidor!");
});

function newTurn(){
    let contador = 0;
}