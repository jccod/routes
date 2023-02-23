const express = require('express')
const morgan = require("morgan")
const usersRoutes = require("./routes/users.routes")

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(usersRoutes)

app.get('/', (req, res) => {
    res.send('Hola mundo jajaj')
})

app.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})

