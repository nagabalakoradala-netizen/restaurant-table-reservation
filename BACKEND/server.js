const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const reservationRoutes = require("./routes/reservation.route");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reservations", reservationRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Restaurant Table Reservation API is running!");
});

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/restaurant_reservation")
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });