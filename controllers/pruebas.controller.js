// Aquí va la logica

const pruebaGet = async(req, res) => {
    res.json({
        msg: 'GET - Controller'
    })
}

const pruebaPost = async(req, res) => {
    console.log('POST desde el controller')
}

const pruebaPut = async(req, res) => {
    console.log('PUT desde el controller')
}

const pruebaDelete = async(req, res) => {
    console.log('DELETE desde el controller')
}

module.exports = {
    pruebaGet,
    pruebaPost,
    pruebaPut,
    pruebaDelete
}