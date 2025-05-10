const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true }, // years of experience
    fees: { type: Number, required: true }, // consultation fees
    rating: { type: Number, default: 0 }, // doctor rating
    location: { type: String, required: true },
    image: { type: String, required: false }, // URL for the doctor's image
    phoneNumber: { type: String, required: false }, // contact number
    hospital: { type: String, required: false }, // hospital/clinic name
});

module.exports = mongoose.model('Doctor', doctorSchema);

