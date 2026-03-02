const { signUp, signIn } = require("../controllers/authController");
const {
  createUser,
  getAllusers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { protectorMW } = require("../middlewares/authGuard");

const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.route("/").post(createUser).get(protectorMW, getAllusers);
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
