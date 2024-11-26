const axios = require("axios");

const prodi = async (req, res) => {
  try {
    const response = await axios.get(
      "https://belajar-express-generator.vercel.app/api/prodi"
    );

    const prodi = response.data;
    res.render("prodi", {
      title: "Halaman Prodi",
      prodi,
      layout: "main",
    });
    // res.render("index", { title: "Halaman Home", berita, layout: "main" });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Gagal mendapatkan data prodi dari API");
  }
};

module.exports = { prodi };
