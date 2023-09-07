const express = require("express");
const patientCtrl = require("../controllers/patientController")

const router = express.Router()

router.post("/login", patientCtrl.login)
router.post("/signup", patientCtrl.signup)

module.exports = router