import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  const placeholderInitial = doctor.name?.split(" ")[1]?.[0] || "?";

  return (
    <div className="doctor-card">
      <div className="image-placeholder">
        {doctor.image ? (
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        ) : (
          `Dr. ${placeholderInitial}`
        )}
      </div>
      <h3>{doctor.name}</h3>
      <p>Specialization: {doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Fees: ₹{doctor.fees}</p>
      <p>Rating: {doctor.rating}</p>
      <p>Location: {doctor.location}</p>
    </div>
  );
};

export default DoctorCard;
