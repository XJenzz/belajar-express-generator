var express = require('express');
var router = express.Router();

// import controller
const mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.get('/about', mainController.about)
router.get('/contact', mainController.contact)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   const berita = [
//         {
//             judul:"Berita 1",
//             isi: "Isi berita 1"
//         },
//         {
//             judul:"Berita 2",
//             isi: "Isi berita 2"
//         },
//     ];
//     res.render('index' , {title : 'Halaman Home', berita, layout : 'main'});
// });

// // route /about
// router.get("/about", (req, res) => {
//     // res.send("About Us");
//     // res.sendFile(__dirname + "/about.html");
//     res.render('about' , {title : 'About Us', layout : 'main' });
// })

// // route /contact
// router.get("/contact", (req,res) => {
//     // res.send("Contact Us");
//     // res.sendFile(__dirname + "/contact.html");
//     res.render('Contact' , {title : 'Contact Us', layout : 'main'});
// })

// // route /mahasiswa
// router.get("/mahasiswa", (req,res) => {
//     res.json({
//         "status" : "success",
//         "message" : "Data mahasiswa",
//         "data" : [
//             {npm: 2226240001, nama: "ahmad"},
//             {npm: 2226240076, nama: "ricky"},
//             {npm: 2226240093, nama: "cengkang"}
//         ], 
//     })
// });

// // route /dosen
// router.get("/dosen", (req,res) => {
//     res.json({
//         "status" : "success",
//         "message" : "Data Dosen",
//         "data" : [
//             {
//                 Prodi: "Sistem Informasi", 
//                 Dosen: ["Iis","Faris","Dafid"]},
//             {
//                 Prodi: "Informatika", 
//                 Dosen: ["Derry","Siska","Yohannes"]
//             }
//         ]
//     })
// })

// // route /prodi
// router.get("/prodi", (req,res) => {

//     const prodi = [
//         {
//             prodi: "Sistem Informasi",
//             fakultas: "FIKR",
//             singkatan: "SI"
//         },
//         {
//             prodi: "Informatika",
//             fakultas: "FIKR",
//             singkatan: "IF"
//         },
//         {
//             prodi: "Teknik Elektro",
//             fakultas: "FIKR",
//             singkatan: "TE"
//         },
//         {
//             prodi: "Manajemen Informatika",
//             fakultas: "FIKR",
//             singkatan: "MI"
//         },
//         {
//             prodi: "Manajemen",
//             fakultas: "FEB",
//             singkatan: "MJ"
//         },
//         {
//             prodi: "Akutansi",
//             fakultas: " FEB",
//             singkatan: "AK"
//         },

//     ]

//     res.render('Prodi' , {title : "Prodi", prodi, layout : 'main'});
// })



module.exports = router;

