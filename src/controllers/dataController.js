const fs = require("fs");
const csv = require("csv-parser");
const Dataset = require("../models/Dataset");


exports.uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const results = [];

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        if (results.length === 0) {
          return res.status(400).json({ message: "CSV is empty" });
        }

        const dataset = await Dataset.create({
          user: req.user.id,
          filename: req.file.filename,
          originalName: req.file.originalname,
          rowCount: results.length,
          columns: Object.keys(results[0]),
          data: results
        });

        res.status(201).json({
          message: "CSV uploaded successfully",
          datasetId: dataset._id,
          rows: dataset.rowCount,
          columns: dataset.columns
        });
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getDatasets = async (req, res) => {
  try {
    const datasets = await Dataset.find({ user: req.user.id })
      .select("originalName rowCount columns createdAt")
      .sort({ createdAt: -1 });

    const formatted = datasets.map((d) => ({
      id: d._id,
      name: d.originalName,
      rows: d.rowCount,
      columns: d.columns,
      createdAt: d.createdAt
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getDatasetById = async (req, res) => {
  try {
    const dataset = await Dataset.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!dataset) {
      return res.status(404).json({ message: "Dataset not found" });
    }

    res.json({
      id: dataset._id,
      name: dataset.originalName,
      rows: dataset.rowCount,
      columns: dataset.columns,
      preview: dataset.data.slice(0, 10),
      createdAt: dataset.createdAt
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getDatasetStats = async (req, res) => {
  try {
    const dataset = await Dataset.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!dataset) {
      return res.status(404).json({ message: "Dataset not found" });
    }

    const numericColumns = {};
    const columns = dataset.columns;

    columns.forEach((col) => {
      const values = dataset.data
        .map((row) => Number(row[col]))
        .filter((v) => !isNaN(v));

      if (values.length > 0) {
        const sum = values.reduce((a, b) => a + b, 0);
        numericColumns[col] = {
          average: Number((sum / values.length).toFixed(2)),
          count: values.length
        };
      }
    });

    res.json({
      id: dataset._id,
      name: dataset.originalName,
      rows: dataset.rowCount,
      numericStats: numericColumns
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDatasetInsights = async (req, res) => {
  try {
    const dataset = await Dataset.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!dataset) {
      return res.status(404).json({ message: "Dataset not found" });
    }

    const sample = dataset.data.slice(0, 5);

    const columnTypes = {};
    dataset.columns.forEach(col => {
      const values = dataset.data.map(row => row[col]).filter(v => v !== undefined);
      const numericCount = values.filter(v => !isNaN(Number(v))).length;

      columnTypes[col] =
        numericCount / values.length > 0.8 ? "numeric" : "categorical";
    });

    res.json({
      filename: dataset.originalName,
      rows: dataset.rowCount,
      columns: dataset.columns.length,
      columnTypes,
      preview: sample
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
