const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
  };

  return (
    <div className="filters">
      <select name="specialization" onChange={handleChange} value={filters.specialization}>
        <option value="">All Specializations</option>
        <option value="General Physician">General Physician</option>
        <option value="Internal Medicine">Internal Medicine</option>
      </select>

      <select name="location" onChange={handleChange} value={filters.location}>
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Pune">Pune</option>
        <option value="Ranchi">Ranchi</option>
      </select>

      <select name="minRating" onChange={handleChange} value={filters.minRating}>
        <option value="">Min Rating</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="4.5">4.5+</option>
      </select>
    </div>
  );
};

export default Filters;
