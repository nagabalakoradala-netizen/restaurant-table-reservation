const Reservation = require("../models/reservation.model");

// Create a new reservation
const createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);

    const savedReservation = await reservation.save();

    res.status(201).json({
      message: "Reservation created successfully",
      reservation: savedReservation
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create reservation",
      error: error.message
    });
  }
};

// Get all reservations
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get reservations",
      error: error.message
    });
  }
};

// Delete a reservation
const deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(
      req.params.id
    );

    if (!deletedReservation) {
      return res.status(404).json({
        message: "Reservation not found"
      });
    }

    res.status(200).json({
      message: "Reservation deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete reservation",
      error: error.message
    });
  }
};

module.exports = {
  createReservation,
  getReservations,
  deleteReservation
};