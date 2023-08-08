const user = require("../model/users");
const bcrypt = require("bcrypt");
const specialist = require("../model/specialists");
const admin = require("../model/admin");

const { jwtGenerator } = require("../utils/JWTgenerator");

const handleLogin = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "email and password are required." });

  email = email.toLowerCase();

  try {
    const foundUser = await user.findOne({ email: email });
    const foundSpecialist = await specialist.findOne({ email: email });

    if (!foundUser && !foundSpecialist) {
      return res.status(401).json({
        error: "There is no account with this email address! ",
      });
    }

    const foundAccount = foundUser || foundSpecialist;

    if (foundAccount.isDeleted) {
      return res.status(401).json({
        message: "Sorry ! Your account has been deleted.",
      });
    }

    const match = await bcrypt.compare(password, foundAccount.hashedPassword);

    if (match) {
      const token = jwtGenerator(foundAccount);
      res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const handleAdminLogin = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "email and password are required." });

  email = email.toLowerCase();

  try {
    const foundAdmin = await admin.findOne({ email: email });

    if (!foundAdmin) {
      return res.status(401).json({
        error: "There is no account with this email address! ",
      });
    }

    const match = await bcrypt.compare(password, foundAdmin.hashedPassword);

    if (match) {
      const token = jwtGenerator(foundAdmin);
      res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleLogin, handleAdminLogin };
