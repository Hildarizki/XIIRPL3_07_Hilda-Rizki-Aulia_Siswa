const Siswa = require("../models/siswa");

const list = async (req, res) => {
  const tables = await Siswa.find();

  res.status(200).json({
    message: "success",
    data: tables,
  });
};

//show
const show = async (req, res) => {
  const { id } = req.params;
  const table = await Siswa.findById(id);

  res.status(200).json({
    message: "success",
    data: table,
  });
};

//create
const create = async (req, res) => {
  const { body } = req;
  const table = await Siswa.create(body);

  res.status(201).json({
    message: "success",
    data: table,
  });
};

//update
const update = async (req, res) => {
  const table = await Siswa.findByIdAndUpdate(id, body, { new: true });

  res.status(202).json({
    message: "success",
    data: table,
  });
};

//remove 
const remove = async (req, res) => {
  const { id } = req.params;
  const table = await Siswa.findByIdAndDelete(id);

  res.status(204).json({
    message: "success",
    data: table,
  });
};

module.exports = { list, show, create, update, remove };