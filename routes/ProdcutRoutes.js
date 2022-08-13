const express = require("express");
const productUser = require("../controllers/ProductController");
const router = express.Router();


router.route("/https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba").get(productUser);

module.exports = router;