const Doctor = require("../models/Doctor");

const listDoctors = async (req, res) => {
  try {
    const { specialization, location, minRating, page = 1, limit = 5 } = req.query;

    const filter = {};

    if (specialization) filter.specialization = specialization;
    if (location) filter.location = location;
    if (minRating) filter.rating = { $gte: parseFloat(minRating) };

    const doctors = await Doctor.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Doctor.countDocuments(filter);

    res.json({
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      doctors
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { listDoctors };
