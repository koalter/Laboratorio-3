import http from "http"; // => Agregar "type": "module" en el package.json
// const http = require("http");
const PORT = 3000;

const app = http.createServer((request, response) => {
    // generamos la respuesta, seteando primero las cabeceras
    response.writeHead(200, { "Content-Type": "text/html" }); // MIME type

    // enviamos la respuesta
    response.end("<h1>Hola Mundo</h1>");
});

const app2 = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(`{ "nombre": "Juan Carlos", "edad": 29 }`);
});

// app.listen(PORT);
app2.listen(PORT);
console.log(`Servidor escuchando en http://localhost:${PORT}`);