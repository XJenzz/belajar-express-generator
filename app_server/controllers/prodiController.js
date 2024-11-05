const axios = require("axios");

const prodi = async (req, res) => {
  // const prodi = [
  //   {
  //     nama_prodi: "Sistem Informasi",
  //     fakultas: "FIKR",
  //     singkatan: "SI",
  //   },
  //   {
  //     nama_prodi: "Informatika",
  //     fakultas: "FIKR",
  //     singkatan: "IF",
  //   },
  //   {
  //     nama_prodi: "Teknik Elektro",
  //     fakultas: "FIKR",
  //     singkatan: "TE",
  //   },
  //   {
  //     nama_prodi: "Manajemen Informatika",
  //     fakultas: "FIKR",
  //     singkatan: "MI",
  //   },
  //   {
  //     nama_prodi: "Manajemen",
  //     fakultas: "FEB",
  //     singkatan: "MJ",
  //   },
  //   {
  //     nama_prodi: "Akuntansi",
  //     fakultas: "FEB",
  //     singkatan: "AK",
  //   },
  // ];
  // res.render("prodi", { title: "Halaman Prodi", prodi, layout: "main" });

  try {
    const response = await axios.get(
      "https://belajar-express-generator.vercel.app/api/prodi"
    );

    const prodi = response.data;
    console.log(prodi);
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
