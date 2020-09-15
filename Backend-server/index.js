//Importanciones en NODE, en este caso importando Express
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./Database/config')

//Crear el servidor de express
const app = express();

//Configurar cors
app.use( cors());

dbConnection();

//console.log(process.env);

//Rutas
app.get( '/' , (req, res)=>{

    res.json({
        ok: true,
        msg: "Hola mundo"
    })

});

//Para levantar el servidor y el puerto
app.listen(process.env.PORT, () => {
    //Callback que se lanza cuando se levanta el servidor
    console.log("Servidor corriendo en el puerto "+process.env.PORT);
});