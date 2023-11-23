const express = require("express");
const router = express.Router();
const { uppercaseName } = require("../controllers/utilityControllers");

router.get("/", uppercaseName);
router.get("/upper", uppercaseName);

module.exports = router;
