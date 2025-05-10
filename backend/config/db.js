const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kumarayush0926:xMnN5sDKp4AtoSq2@doctorlistings.rx1te8g.mongodb.net/?retryWrites=true&w=majority&appName=DoctorListings', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
