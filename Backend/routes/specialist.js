const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const specialistController = require("../controllers/specialistController");

router.get("/get_specialist", verifyJWT, specialistController.getSpecialist);

router.put(
  "/update_specialist",
  verifyJWT,
  specialistController.updateSpecialist
);

router.put(
  "/delete_specialist",
  verifyJWT,
  specialistController.deleteSpecialist
);

module.exports = router;
