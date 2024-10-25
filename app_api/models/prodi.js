const mongoose = require("mongoose");

const prodiSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    trim: true,
  },
  singkatan: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Prodi = mongoose.model("Prodi", prodiSchema);

module.exports = Prodi;
