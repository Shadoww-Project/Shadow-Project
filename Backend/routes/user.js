const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const usersController = require("../controllers/userController");

router.get("/get_user", verifyJWT, usersController.getUser);

router.put("/update_user", verifyJWT, usersController.updateUser);

router.put("/delete_user", verifyJWT, usersController.deleteUser);

module.exports = router;
