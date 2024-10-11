var express = require('express');
var router = express.Router();

// Import Controller
const mainController = require('../controllers/mainController');

// route
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);

/* GET home page. */
// router.get('/',  function(req, res, next) {
//     const berita = [
//         {
//             judul: 'Berita 1',
//             isi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolores debitis, voluptate exercitationem voluptatum nemo saepe qui porro vitae. Molestiae accusamus, aliquam iste odit eum facere suscipit qui minus. Quasi autem velit est quia nulla.'
//         },
//         {
//             judul: 'Berita 2',
//             isi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur eos illo aliquam unde beatae facilis, assumenda minus voluptatem perspiciatis! Tempora perferendis quidem magni quia sint, inventore aut! Quam molestiae perferendis eligendi, sunt nemo maiores sapiente impedit tempore eius esse.'
//         }
//     ]
//     res.render('index', {title: 'Halaman Home', berita, layout: "main"});
// });

// router.get('/about',  function(req, res, next) {
//     res.render('about', {title: "Halaman About", layout: "main"});
// })

// router.get('/contact', (req, res) => {
//     res.render('contact', {title: "Halaman Contact", layout: "main"});
// });

// router.get('/prodi', (req, res) => {
//     const prodi = [
//         {
//             nama_prodi: 'Sistem Informasi',
//             fakultas: 'FIKR',
//             singkatan: 'SI'
//         },
//         {
//             nama_prodi: 'Informatika',
//             fakultas: 'FIKR',
//             singkatan: 'IF'
//         },
//         {
//             nama_prodi: 'Teknik Elektro',
//             fakultas: 'FIKR',
//             singkatan: 'TE'
//         },
//         {
//             nama_prodi: 'Manajemen Informatika',
//             fakultas: 'FIKR',
//             singkatan: 'MI'
//         },
//         {
//             nama_prodi: 'Manajemen',
//             fakultas: 'FEB',
//             singkatan: 'MJ'
//         },
//         {
//             nama_prodi: 'Akuntansi',
//             fakultas: 'FEB',
//             singkatan: 'AK'
//         },
//     ]
//     res.render('prodi',{title: 'Halaman Prodi', prodi, layout: "main"});
// })

module.exports = router;
