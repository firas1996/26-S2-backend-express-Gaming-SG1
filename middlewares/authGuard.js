const User = require("../models/userModel");
const { verify } = require("jsonwebtoken");
const { promisify } = require("util");

exports.protectorMW = async (req, res, next) => {
  try {
    let token;
    // 1) nthabtou ken el user 3andou token or not !
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(401).json({
        message: "You are not loggedIn !!!",
      });
    }
    // 2) nthabtou ken el token valid or not !
    const tokenPayload = await promisify(verify)(token, process.env.JWT_SECRET);
    // 3) nthabtou si el user moula el token still exists !!!
    // 4) nthabat si el token tsan3et 9bal wala ba3d last pass change !
  } catch (error) {
    res.status(400).json({
      message: "Creation failed",
      error: error.message,
    });
  }
};
