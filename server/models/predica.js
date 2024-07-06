const mongoose = require('mongoose');

const predicaSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  fecha: Date,
  urlVideo: String,
});

module.exports = mongoose.model('Predica', predicaSchema);
