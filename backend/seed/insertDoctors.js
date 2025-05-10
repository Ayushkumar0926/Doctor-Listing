const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Doctor = require('../models/Doctor');
const doctors = require('./doctorsData');

const seedDoctors = async () => {
  try {
    await connectDB();
    await Doctor.deleteMany(); // optional: clear existing
    await Doctor.insertMany(doctors);
    console.log("Dummy doctors inserted");
    mongoose.disconnect();
  } catch (err) {
    console.error("Insert failed:", err);
  }
};

seedDoctors();