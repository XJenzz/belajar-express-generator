var express = require('express');
var router = express.Router();

router.get('/',  function(req, res, next) {
    res.render('about', {title: "Halaman About", layout: "main"});
});

module.exports = router;