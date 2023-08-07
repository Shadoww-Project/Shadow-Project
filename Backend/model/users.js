const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    parentName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    childName: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    childCondition: {
      type: String,
      required: true,
    },
    childReport: {
      type: String,
      // required: true,
    },

    Approved: {
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
