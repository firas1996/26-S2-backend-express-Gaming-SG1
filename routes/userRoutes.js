const { signUp } = require("../controllers/authController");
const {
  createUser,
  getAllusers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/signUp", signUp);

router.route("/").post(createUser).get(getAllusers);
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
