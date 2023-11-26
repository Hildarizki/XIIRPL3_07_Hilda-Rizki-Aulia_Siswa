//Hilda Rizki Aulia
//XII RPL 3 / 07

const express = require("express");
const mongoose = require("mongoose");

const app = express();
//app.use(express.json());

const connectMongoDB = require("./config/mongoose");
const SiswaModel = require("./models/siswa");

const SiswaRoute = require("./routes/siswa");

const port = 27017;

app.use(SiswaRoute);
connectMongoDB();

const table = new SiswaModel({});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});