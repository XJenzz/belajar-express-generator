const Prodi = require("../models/prodi");

const getAllProdi = async (req, res) => {
  try {
    const prodi = await Prodi.find();

    res.status(200).json(prodi);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getProdiById = async (req, res) => {
  try {
    const prodi = await Prodi.findById(req.params.id);

    if (!prodi) {
      return res.status(404).json({ message: "Prodi not found" });
    }

    res.status(200).json(prodi);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const createProdi = async (req, res) => {
  const prodi = new Prodi({
    nama: req.body.nama,
    singkatan: req.body.singkatan,
  });

  try {
    const newProdi = await prodi.save();

    res.status(201).json(newProdi);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const updateProdi = async (req, res) => {
  try {
    const prodi = await Prodi.findById(req.params.id);

    if (!prodi) {
      return res.status(404).json({ message: "Prodi not found" });
    }

    if (req.body.nama != null) {
      prodi.nama = req.body.nama;
    }

    if (req.body.singkatan != null) {
      prodi.singkatan = req.body.singkatan;
    }

    const updateProdi = await prodi.save();
    res.status(200).json(updateProdi);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const deleteProdi = async (req, res) => {
  try {
    const prodi = await Prodi.findById(req.params.id);

    if (!prodi) {
      return res.status(404).json({ message: "Prodi not found" });
    }

    await prodi.deleteOne();
    res.status(200).json({ message: "Prodi deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllProdi,
  getProdiById,
  createProdi,
  updateProdi,
  deleteProdi,
};
