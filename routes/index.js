var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  function(req, res, next) {
    const berita = [
        {
            judul: 'Berita 1',
            isi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolores debitis, voluptate exercitationem voluptatum nemo saepe qui porro vitae. Molestiae accusamus, aliquam iste odit eum facere suscipit qui minus. Quasi autem velit est quia nulla.'
        },
        {
            judul: 'Berita 2',
            isi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur eos illo aliquam unde beatae facilis, assumenda minus voluptatem perspiciatis! Tempora perferendis quidem magni quia sint, inventore aut! Quam molestiae perferendis eligendi, sunt nemo maiores sapiente impedit tempore eius esse.'
        }
    ]
    res.render('index', {title: 'Halaman Home', berita, layout: "main"});
});

module.exports = router;
