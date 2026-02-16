const { Schema, model } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is requred !!!!"],
    maxlength: 15,
  },
  email: {
    type: String,
    required: [true, "The email is requred !!!!"],
    unique: true,
    validate: [validator.isEmail, "Email is not valid !!!"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "The password is requred !!!!"],
    minlength: 8,
    // select: false,
  },
  confirm_password: {
    type: String,
    required: [true, "The confirm_password is requred !!!!"],
    minlength: 8,
    validate: {
      validator: function (cPass) {
        return cPass === this.password;
      },
      message: "cPass does not match !!!!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  last_password_change_date: {
    type: Date,
    default: Date.now(),
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = model("User", userSchema);

module.exports = User;
