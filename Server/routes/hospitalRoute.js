const express = require("express");
const hospitalCtrl = require("../controllers/hospitalController")

const router = express.Router()

router.post("/login", hospitalCtrl.login)
router.post("/signup", hospitalCtrl.signup)

module.exports = router