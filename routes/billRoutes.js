const express = require("express");
const billController = require("../controllers/billController");

const router = express.Router();

router.post("/billing-list", billController.getBillList);
router.post("/add-billing", billController.addBill);
router.patch("/update-billing/:id", billController.updateBill);
router.post("/delete-billing/:id", billController.deleteBill);

module.exports = router;
