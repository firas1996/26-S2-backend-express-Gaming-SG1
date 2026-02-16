const {
  createUser,
  getAllusers,
  getUserById,
} = require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.post("/createUser", createUser);
router.get("/getAllUsers", getAllusers);
router.get("/getUserById/:id", getUserById);

module.exports = router;
