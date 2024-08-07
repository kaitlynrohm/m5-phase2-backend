// ====== Packages and imports ====== //
const express = require("express");
const cors = require("cors"); // Import cors middleware once
const app = express();
require("dotenv").config();

// Import routes
const distanceRoute = require("./routes/distanceRoute");
const stationRoutes = require("./routes/stationRoutes");
const filtersRoute = require("./routes/filtersRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// =========== ENDPOINTS =========== //
// Initial setup in Postman
app.get("/", (req, res) => {
  console.log("Home endpoint reached");
  res.send("Hello world");
});

app.use(distanceRoute);
app.use(stationRoutes);
app.use(filtersRoute);

// ============== PORT ============== //
const PORT = process.env.PORT;
app
  .listen(PORT, () => {
    console.log(`Server is alive on http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log("PORT is already in use.");
    } else {
      console.log("Server Errors: ", error);
    }
  });
