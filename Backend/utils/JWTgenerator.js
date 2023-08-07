const jwt = require("jsonwebtoken");
require("dotenv").config();
function jwtGenerator(user) {
  const payload = {
    user_id: user._id,
    role: user.role,
  };
  return jwt.sign(payload, process.env.jwtSecret);
}

module.exports = { jwtGenerator };
