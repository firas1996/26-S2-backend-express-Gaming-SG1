const { createUser, getAllusers } = require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.post("/createUser", createUser);
router.get("/getAllUsers", getAllusers);

module.exports = router;
