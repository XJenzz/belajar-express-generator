var express = require('express');
const { route } = require('.');
var router = express.Router();

router.get('/', (req, res) => {
    const prodi = [
        {
            nama_prodi: 'Sistem Informasi',
            fakultas: 'FIKR',
            singkatan: 'SI'
        },
        {
            nama_prodi: 'Informatika',
            fakultas: 'FIKR',
            singkatan: 'IF'
        },
        {
            nama_prodi: 'Teknik Elektro',
            fakultas: 'FIKR',
            singkatan: 'TE'
        },
        {
            nama_prodi: 'Manajemen Informatika',
            fakultas: 'FIKR',
            singkatan: 'MI'
        },
        {
            nama_prodi: 'Manajemen',
            fakultas: 'FEB',
            singkatan: 'MJ'
        },
        {
            nama_prodi: 'Akuntansi',
            fakultas: 'FEB',
            singkatan: 'AK'
        },
    ]
    res.render('prodi',{title: 'Halaman Prodi', prodi, layout: "main"});
})

module.exports = router;