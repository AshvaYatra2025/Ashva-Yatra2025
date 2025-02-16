const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pickupLocation: String,
    dropLocation: String,
    vehicleType: String,
    status: { type: String, enum: ["Pending", "Accepted", "Completed", "Cancelled"], default: "Pending" },
    fare: Number
}, { timestamps: true });

module.exports = mongoose.model("Ride", rideSchema);