const express = require("express");

const router = express.Router();

const {
  createReservation,
  getReservations,
  deleteReservation
} = require("../controllers/reservation.controller");

// Create reservation
router.post("/", createReservation);

// Get all reservations
router.get("/", getReservations);

// Delete reservation
router.delete("/:id", deleteReservation);

module.exports = router;