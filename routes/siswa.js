//Hilda Rizki Aulia
//XII RPL 3 / 07

const express = require("express");
const router = express.Router();

const siswaController = require("../controllers/siswa");

router.get("/siswa", siswaController.list);
router.get("/siswa/:id", siswaController.show);
router.post("/siswa", siswaController.create);
router.put("/siswa/:id", siswaController.update);
router.delete("/siswa/:id", siswaController.remove);

module.exports = router;