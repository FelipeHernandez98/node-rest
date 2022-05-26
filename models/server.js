require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        //Variables
        this.app = express();
        this.port = process.env.PORT;

        //Definimos rutas
        this.rutas = {
            pruebas: '/api/pruebas'
        }

        // Hacemos la conexion a la BD
        this.conectarDB();

        // Inicializamos los middlewares
        this.middlewares();

        // Iniciamos las Rutas
        this.routes();
    }

    // Mertodo para conectar a la bd
    async conectarDB(){
        await dbConnection();
    }

    // Meotodo para definir Middlewares
    middlewares(){

        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));
        
    }

    routes(){
        this.app.use(this.rutas.pruebas, require('../routes/pruebas.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor en el puero ${ this.port}`);
        })
    }

}

module.exports = Server;