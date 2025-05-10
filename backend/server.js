const express = require("express");
const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", doctorRoutes); // Mount routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
