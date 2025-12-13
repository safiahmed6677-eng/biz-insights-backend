const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    filename: String,
    originalName: String,
    rowCount: Number,
    columns: [String],
    data: [Object]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dataset", datasetSchema);
