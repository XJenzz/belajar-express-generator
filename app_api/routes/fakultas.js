const express = require("express");

const router = express.Router();

const fakultasController = require("../controllers/fakultasController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", authMiddleware,fakultasController.getAllFakultas);

router.post("/", authMiddleware,roleMiddleware("admin"),fakultasController.createFakultas);

router.get("/:id",authMiddleware,fakultasController.getFakultasById);

router.put("/:id",authMiddleware,roleMiddleware("admin"), fakultasController.updateFakultas);

router.delete("/:id",authMiddleware,roleMiddleware("admin"), fakultasController.deleteFakultas);

// router.get("/", fakultasController.getAllFakultas);

// router.post("/", fakultasController.createFakultas);

// router.get("/:id", fakultasController.getFakultasById);

// router.put("/:id", fakultasController.updateFakultas);

// router.delete("/:id", fakultasController.deleteFakultas);

module.exports = router;
