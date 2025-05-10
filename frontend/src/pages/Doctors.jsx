import { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";
import Filters from "../components/Filters";
import "./Doctors.css"

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({
    specialization: "",
    location: "",
    minRating: "",
    page: 1,
    limit: 100,
  });

  const fetchDoctors = async () => {
    try {
      const params = {};
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params[key] = value;
      });

      const res = await axios.get("https://doctor-listing-easy.onrender.com", { params });
      setDoctors(res.data.doctors);
    } catch (err) {
      console.error("Error fetching doctors:", err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters]); // refetch when filters change

  return (
    <div className="container">
      <Filters filters={filters} setFilters={setFilters} />
      <div className="doctor-grid">
        {doctors.map((doc) => (
          <DoctorCard key={doc._id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
