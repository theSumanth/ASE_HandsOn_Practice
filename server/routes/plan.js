const express = require("express");
const { getPrepaidPlans, getPostpaidPlans } = require("../controllers/plan");

const router = express.Router();

router.get("/prepaid", getPrepaidPlans);

router.get("/postpaid", getPostpaidPlans);

module.exports = router;
