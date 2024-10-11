const index = (req, res) => {
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
}

const about = (req, res) => {
    res.render('about', {title: "Halaman About", layout: "main"});
}

const contact = (req, res) => {
    res.render('contact', {title: "Halaman Contact", layout: "main"});
}

module.exports = {index, about, contact};