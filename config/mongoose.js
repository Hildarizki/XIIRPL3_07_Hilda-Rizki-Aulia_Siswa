
//Hilda Rizki Aulia
//XII RPL 3 / 07

const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/portofoliokk4c");
  console.log("The application has connected to the database...");
};