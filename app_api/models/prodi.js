// models/Prodi.js
// Mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");

// Definisikan skema untuk Prodi
const prodiSchema = new mongoose.Schema({
    // Field untuk nama Prodi
    nama: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    // Field untuk singkatan Prodi
    singkatan: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    fakultas_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fakultas", 
        required: true, 
    },
    // Field untuk menyimpan tanggal pembuatan data Prodi
    createdAt: {
        type: Date, // Tipe data tanggal
        default: Date.now, // Default adalah tanggal dan waktu saat ini
    },
});

// Buat model Prodi dari skema yang telah didefinisikan
const Prodi = mongoose.model("Prodi", prodiSchema);

// Mengekspor model Prodi agar dapat digunakan di file lain
module.exports = Prodi;
