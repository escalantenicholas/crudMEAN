const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre: { type: String, require: true },
    categoria: { type: String, require: true },
    ubicacion: { type: String, require: true },
    precio: { type: Number, require: true },
    fechaCreacion: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Producto', productoSchema)