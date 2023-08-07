const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const usersController = require("../controllers/userController");
const verifyRole = require("../middleware/verifyRole");

//user

// router.get("/getuser", verifyJWT, usersController.getUser);
router.get(
  "/getAllUsers",
  verifyJWT,
  verifyRole("admin"),
  usersController.getAllUsers
);
// router.put("/updateUser", verifyJWT, usersController.updateUser);

router.put(
  "/approveUser/:id",
  verifyJWT,
  verifyRole("admin"),
  usersController.approveUser
);

//specialist

router.get(
  "/getAllSpecialists",
  verifyJWT,
  verifyRole("admin"),
  usersController.getAllSpecialists
);
router.put(
  "/approveSpecialist/:id",
  verifyJWT,
  verifyRole("admin"),

  usersController.approveSpecialist
);

// router.get("/getSpecialist", verifyJWT, usersController.getSpecialist);
// router.put("/updateSpecialist", verifyJWT, usersController.updateSpecialist);

//admin

router.put(
  "/deleteUser/:id",
  verifyJWT,
  verifyRole("admin"),
  usersController.deleteUser
);
router.put(
  "/updateUser/:id",
  verifyJWT,
  verifyRole("admin"),
  usersController.updateUser
);
router.put(
  "/updateSpecialist/:id",
  verifyJWT,
  verifyRole("admin"),
  usersController.updateSpecialist
);

router.put(
  "/deleteSpecialist/:id",
  verifyJWT,
  verifyRole("admin"),
  usersController.deleteSpecialist
);

//mutual

router.get(
  "/getAllCounts",
  //   verifyJWT,
  //   verifyRole("admin"),
  usersController.getAllCounts
);

module.exports = router;
