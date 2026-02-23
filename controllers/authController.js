const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const user = await User.create({
      ...req.body,
      role: req.body.role === "admin" ? "user" : req.body.role,
    });
    res.status(201).json({
      message: "User created !!!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      message: "Creation failed",
      error: error.message,
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "The email and pass are required !!!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "Email or password are incorrect !!!!",
      });
    }
    if (!(await user.checkPass(user.password, password))) {
      res.status(400).json({
        message: "Email or password are incorrect !!!!",
      });
    }
    res.status(200).json({
      message: "Logged in !!!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      message: "Creation failed",
      error: error.message,
    });
  }
};
