const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
})

module.exports = mongoose.model('Stock', dataSchema)
