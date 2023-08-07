const express = require("express");
const router = express.Router();
const multer = require("multer");
const registerController = require("../controllers/registerController");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/newuser",
  upload.single("file"),
  registerController.handleNewUser
);

router.post("/newspecialist", registerController.handleNewSpecialist);
router.post("/createOrUpdateAdmin", registerController.createOrUpdateAdmin);

module.exports = router;
