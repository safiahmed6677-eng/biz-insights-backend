const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
