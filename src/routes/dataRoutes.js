const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

const {
  uploadCSV,
  getDatasets,
  getDatasetInsights,
  getDatasetStats,
  getDatasetChart
} = require("../controllers/dataController");

/* =========================
   MULTER CONFIG
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "text/csv") {
      cb(null, true);
    } else {
      cb(new Error("Only CSV files allowed"));
    }
  }
});

/* =========================
   ROUTES
========================= */

// Upload CSV
router.post("/upload", authMiddleware, upload.single("file"), uploadCSV);

// List datasets (no raw data)
router.get("/", authMiddleware, getDatasets);

// Dataset insights (types + preview)
router.get("/:id/insights", authMiddleware, getDatasetInsights);

// Dataset stats (min / max / avg / count)
router.get("/:id/stats", authMiddleware, getDatasetStats);

// Dataset chart data
router.get("/:id/chart", authMiddleware, getDatasetChart);

module.exports = router;
