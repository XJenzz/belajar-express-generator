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

const store = async (req, res) => {
  const { nama, singkatan } = req.body;
  try {
    const response = await fetch(
      "https://belajar-express-generator.vercel.app/api/fakultas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama, singkatan }),
      }
    );

    if (response.ok) {
      res.redirect("/fakultas"); // Redirect ke halaman fakultas setelah berhasil menambah
    } else {
      res.status(500).send("Gagal menambahkan data fakultas.");
    }
  } catch (error) {
    res.status(500).send("Error menambahkan data fakultas");
  }
};

module.exports = { index, store };
