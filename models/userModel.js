const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

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

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
    this.confirm_password = undefined;
  }
  return next;
});

const User = model("User", userSchema);

module.exports = User;
