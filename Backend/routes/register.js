const express = require("express");
const router = express.Router();
const multer = require("multer");
const registerController = require("../controllers/registerController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyRole = require("../middleware/verifyRole");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/new_user",
  upload.single("file"),
  registerController.handleNewUser
);

router.post("/new_specialist", registerController.handleNewSpecialist);

router.post(
  "/new_admin",
  verifyJWT,
  verifyRole("admin"),
  registerController.handleNewAdmin
);

module.exports = router;
