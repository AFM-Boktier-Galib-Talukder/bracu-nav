const mongoose = require('mongoose')

const helloSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

helloSchema.index({ timestamp: -1 })

module.exports = mongoose.model('HelloWorld', helloSchema, 'helloworld')
