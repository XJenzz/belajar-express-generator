const axios = require("axios");

const index = async (req, res) => {
  try {
    const response = await axios.get(
      "https://belajar-express-generator.vercel.app/api/fakultas"
    );

    const fakultas = response.data;

    res.render("fakultas", {
      title: "Halaman Fakultas",
      fakultas,
      layout: "main",
    });
    // res.render("index", { title: "Halaman Home", berita, layout: "main" });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Gagal mendapatkan data fakultas dari API");
  }
};

module.exports = { index };
