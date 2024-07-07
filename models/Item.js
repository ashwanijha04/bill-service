const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  itemDate: { type: Date, required: true },
  itemDetails: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
