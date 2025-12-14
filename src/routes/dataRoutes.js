const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

const {
  uploadCSV,
  getDatasets,
  getDatasetInsights
} = require("../controllers/dataController");

/* Multer setup */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", authMiddleware, upload.single("file"), uploadCSV);
router.get("/", authMiddleware, getDatasets);
router.get("/:id/insights", authMiddleware, getDatasetInsights);

module.exports = router;
