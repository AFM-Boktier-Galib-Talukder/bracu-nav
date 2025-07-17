const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const helloRoutes = require('./hello-world/hello-world.route')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/hello', helloRoutes)

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString(),
  })
})

module.exports = app
