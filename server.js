import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new Server(server)

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log("Usuario conectado")
})

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
})