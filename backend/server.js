const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const PORT = 3030
require('dotenv').config()

// Global Error Hanlding Middleware (always after routes or at the end to catch almost all errors)
app.use(errorHandler)

app.listen(PORT, () => console.log('Server Running on PORT: ',PORT))