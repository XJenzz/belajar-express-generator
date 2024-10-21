const Fakultas = require("../models/fakultas");

const getAllFakultas = async (req, res) => {
  try {
    const fakultas = await Fakultas.find();

    res.status(200).json(fakultas);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getFakultasById = async (req, res) => {
  try {
    const fakultas = await Fakultas.findById(req.params.id);

    if (!fakultas) {
      return res.status(404).json({ message: "Fakultas not found" });
    }

    res.status(200).json(fakultas);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const createFakultas = async (req, res) => {
  const fakultas = new Fakultas({
    nama: req.body.nama,
    singkatan: req.body.singkatan,
  });

  try {
    const newFakultas = await fakultas.save();

    res.status(201).json(newFakultas);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const updateFakultas = async (req, res) => {
  try {
    const fakultas = await Fakultas.findById(req.params.id);

    if (!fakultas) {
      return res.status(404).json({ message: "Fakultas not found" });
    }

    if (req.body.nama != null) {
      fakultas.nama = req.body.nama;
    }

    if (req.body.singkatan != null) {
      fakultas.singkatan = req.body.singkatan;
    }

    const updateFakultas = await fakultas.save();
    res.status(200).json(updateFakultas);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const deleteFakultas = async (req, res) => {
  try {
    const fakultas = await Fakultas.findById(req.params.id);

    if (!fakultas) {
      return res.status(404).json({ message: "Fakultas not found" });
    }

    await fakultas.deleteOne();
    res.status(200).json({ message: "Fakultas deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllFakultas,
  getFakultasById,
  createFakultas,
  updateFakultas,
  deleteFakultas,
};
