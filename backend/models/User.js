const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    googleId: String,
    facebookId: String,
    role: { type: String, enum: ["Passenger", "Driver"], default: "Passenger" },
    location: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);