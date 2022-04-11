const express = require('express')
const conectarBD = require('./config/db')
const cors = require('cors')

require('dotenv').config({ path: 'variables.env' })

//Creamos el servidor
const app = express();

//Conectar BD
conectarBD()

app.use(cors())

//Habilitar formato json
app.use(express.json())

// Rutas
app.use('/api/productos', require('./rutas/productos'))

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log('El servidor esta corriendo.')
})