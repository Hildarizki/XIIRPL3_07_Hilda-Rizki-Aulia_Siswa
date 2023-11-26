//Hilda Rizki Aulia
//XII RPL 3 / 07


const mongoose = require("mongoose");

/**
 * type: absent (ijin), present (hadir), alpha (alfa), sick (sakit), late (telat)
 */

const TableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nis: {
    type: String,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  kelas: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

const Table = mongoose.model("siswa", TableSchema);

module.exports = Table;