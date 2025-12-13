const express = require("express");
const router = express.Router();
const upload = require("../config/upload");
const authMiddleware = require("../middleware/authMiddleware");
const {
  uploadCSV,
  getDatasets,
  getDatasetById,
  getDatasetStats
} = require("../controllers/dataController");

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  uploadCSV
);

// ✅ NEW: list datasets for logged-in user
router.get("/", authMiddleware, getDatasets);
router.get("/:id", authMiddleware, getDatasetById);
router.get("/:id/stats", authMiddleware, getDatasetStats);

module.exports = router;
