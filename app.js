
// importar el paquete de express, para el webserver
const express = require ('express');
// inicializar la aplicación con el archivo app.js
const app = express();
// para activar el puerto
const puerto = 7475;

// para mostrar los archivos de la carpeta public,utiliza metodo use

app.use(express.static('public'));

// para crear la ruta de la página web, se utiliza el metodo get

app.get('/left-sidebar', (req, res) =>{
    
})