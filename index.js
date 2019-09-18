// Constantes para instanciar las rutas y el servidor
const path = require('path')
const express = require('express')
const app = express()

// Configuración del puerto
app.set("port", process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'src')))

// Escuchar el puerto

const server = app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'))
})