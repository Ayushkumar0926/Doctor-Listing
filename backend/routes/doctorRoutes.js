const express = require("express");
const router = express.Router();
const { listDoctors } = require("../controllers/doctorController");

router.get("/list-doctor-with-filter", listDoctors);

module.exports = router;
