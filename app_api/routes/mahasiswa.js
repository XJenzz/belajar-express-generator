const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");
const upload = require("../middleware/uploadMiddleware");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", authMiddleware, mahasiswaController.getAllMahasiswa);
router.get("/:id", authMiddleware, mahasiswaController.getMahasiswaById);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("foto"),
  mahasiswaController.createMahasiswa
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("foto"),
  mahasiswaController.updateMahasiswa
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  mahasiswaController.deleteMahasiswa
);

module.exports = router;
