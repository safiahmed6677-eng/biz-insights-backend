const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "src/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();

    if (ext !== ".csv") {
      return cb(new Error("Only CSV files allowed"));
    }

    cb(null, true);
  }
});

module.exports = upload;
