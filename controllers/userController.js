const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
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

exports.getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users fetched !!!",
      data: {
        nbr: users.length,
        users: users,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fetching failed",
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        message: "User not found !!!",
      });
    }
    res.status(200).json({
      message: "User fetched !!!",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fetching failed",
      error: error.message,
    });
  }
};

// exports.getUserByName = async (req, res) => {
//   try {
//     const user = await User.findOne(req.params.name);
//     if (!user) {
//       res.status(404).json({
//         message: "User not found !!!",
//       });
//     }
//     res.status(200).json({
//       message: "User fetched !!!",
//       data: {
//         user: user,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Fetching failed",
//       error: error.message,
//     });
//   }
// };

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).json({
        message: "User not found !!!",
      });
    }
    res.status(200).json({
      message: "User Updated !!!",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fetching failed",
      error: error.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "User Deleted !!!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Deleting failed",
      error: error.message,
    });
  }
};
