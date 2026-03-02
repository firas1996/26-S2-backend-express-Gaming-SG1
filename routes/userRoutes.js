const { signUp, signIn } = require("../controllers/authController");
const {
  createUser,
  getAllusers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { protectorMW, checkRoleMW } = require("../middlewares/authGuard");

const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router
  .route("/")
  .post(createUser)
  .get(protectorMW, checkRoleMW("admin", "user"), getAllusers);
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(checkRoleMW("admin"), deleteUserById);

module.exports = router;
