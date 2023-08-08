const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const verifyRole = require("../middleware/verifyRole");
const adminController = require("../controllers/adminController");

// admins

router.get(
  "/get_admin",
  verifyJWT,
  verifyRole("admin"),
  adminController.getAdmin
);

router.put(
  "/update_admin/:id",
  verifyJWT,
  verifyRole("admin"),
  adminController.updateAdmin
);

router.delete(
  "/delete_admin/:id",
  verifyJWT,
  verifyRole("admin"),
  adminController.deleteAdmin
);

// users

router.get(
  "/get_all_users",
  verifyJWT,
  verifyRole("admin"),
  adminController.getAllUsers
);

router.put(
  "/update_user/:id",
  verifyJWT,
  verifyRole("admin"),
  adminController.updateUser
);

router.put(
  "/delete_user/:id",
  verifyJWT,
  verifyRole("admin"),
  adminController.deleteUser
);

router.put(
  "/approve_user/:id",
  verifyJWT,
  verifyRole("admin"),
  adminController.approveUser
);

/// specialists

router.get(
  "/get_all_specialists",
  verifyJWT,
  verifyRole("admin"),
  adminController.getAllSpecialists
);

router.put(
  "/approve_specialist/:id",
  verifyJWT,
  verifyRole("admin"),

  adminController.approveSpecialist
);

router.put(
  "/update_specialist/:id",
  verifyJWT,
  verifyRole("admin"),
  adminController.updateSpecialist
);

router.put(
  "/delete_specialist/:id",
  verifyJWT,
  verifyRole("admin"),
  adminController.deleteSpecialist
);

router.get("/get_all_counts", adminController.getAllCounts);

module.exports = router;
