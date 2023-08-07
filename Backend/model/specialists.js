const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    yearsOfExperience: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },

    graduationCertificate: {
      type: String,

      // required: true,
    },
    resume: {
      type: String,
      // required: true,
    },
    ID_card: {
      type: String,

      // required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },

    Approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Specialist", userSchema);

module.exports = User;
