const mongoose = require('mongoose');

const dbConnection = async ()=>{

    try{
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Base de datos conectada')
    }catch(err){
        console.log('Error al inicializar la base de datos'.green);
        throw err
    }

}

module.exports = {
    dbConnection
}