var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', {title: "Halaman Contact", layout: "main"});
});

module.exports = router;