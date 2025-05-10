const doctors = [
  {
    name: "Dr. Ananya Sharma",
    specialization: "Cardiologist",
    location: "Delhi",
    rating: 4.7,
    fees: 700,
    experience: 8,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Rahul Verma",
    specialization: "Dermatologist",
    location: "Mumbai",
    rating: 4.5,
    fees: 600,
    experience: 5,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Meera Singh",
    specialization: "Gynecologist",
    location: "Bangalore",
    rating: 4.8,
    fees: 800,
    experience: 10,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Arjun Patel",
    specialization: "Neurologist",
    location: "Hyderabad",
    rating: 4.6,
    fees: 900,
    experience: 12,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Priya Menon",
    specialization: "Pediatrician",
    location: "Chennai",
    rating: 4.9,
    fees: 500,
    experience: 7,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Vikram Desai",
    specialization: "Orthopedic",
    location: "Kolkata",
    rating: 4.3,
    fees: 750,
    experience: 9,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Swati Ghosh",
    specialization: "Dentist",
    location: "Pune",
    rating: 4.4,
    fees: 650,
    experience: 6,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Karan Malhotra",
    specialization: "ENT Specialist",
    location: "Ahmedabad",
    rating: 4.2,
    fees: 550,
    experience: 4,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Neha Jain",
    specialization: "Psychiatrist",
    location: "Jaipur",
    rating: 4.8,
    fees: 950,
    experience: 11,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Ramesh Rao",
    specialization: "General Physician",
    location: "Lucknow",
    rating: 4.6,
    fees: 400,
    experience: 15,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Sunita Iyer",
    specialization: "Endocrinologist",
    location: "Surat",
    rating: 4.5,
    fees: 850,
    experience: 13,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Manish Tiwari",
    specialization: "Urologist",
    location: "Nagpur",
    rating: 4.3,
    fees: 700,
    experience: 9,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Kavita Mishra",
    specialization: "Pulmonologist",
    location: "Indore",
    rating: 4.7,
    fees: 620,
    experience: 8,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Ashok Nair",
    specialization: "Nephrologist",
    location: "Bhopal",
    rating: 4.1,
    fees: 920,
    experience: 14,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Anjali Saxena",
    specialization: "Ophthalmologist",
    location: "Patna",
    rating: 4.6,
    fees: 540,
    experience: 6,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Ravi Kapoor",
    specialization: "Rheumatologist",
    location: "Ludhiana",
    rating: 4.3,
    fees: 880,
    experience: 10,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Sheetal Agarwal",
    specialization: "Immunologist",
    location: "Nashik",
    rating: 4.4,
    fees: 760,
    experience: 9,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Harsh Mehta",
    specialization: "Gastroenterologist",
    location: "Kanpur",
    rating: 4.7,
    fees: 860,
    experience: 12,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Bhavana Reddy",
    specialization: "Oncologist",
    location: "Thane",
    rating: 4.8,
    fees: 1000,
    experience: 11,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Sanjay Batra",
    specialization: "Hematologist",
    location: "Agra",
    rating: 4.2,
    fees: 870,
    experience: 7,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Alka Joshi",
    specialization: "Pathologist",
    location: "Varanasi",
    rating: 4.1,
    fees: 620,
    experience: 6,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Nitin Sharma",
    specialization: "General Physician",
    location: "Visakhapatnam",
    rating: 4.6,
    fees: 400,
    experience: 13,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Pooja Chatterjee",
    specialization: "Pediatrician",
    location: "Meerut",
    rating: 4.9,
    fees: 580,
    experience: 5,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Abhay Thakur",
    specialization: "Gynecologist",
    location: "Amritsar",
    rating: 4.7,
    fees: 820,
    experience: 14,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Rekha Sinha",
    specialization: "Orthopedic",
    location: "Ranchi",
    rating: 4.3,
    fees: 690,
    experience: 10,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Kunal Joshi",
    specialization: "Cardiologist",
    location: "Guwahati",
    rating: 4.5,
    fees: 740,
    experience: 11,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Sneha Dubey",
    specialization: "Dentist",
    location: "Dehradun",
    rating: 4.6,
    fees: 600,
    experience: 7,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Mohan Krishna",
    specialization: "ENT Specialist",
    location: "Jabalpur",
    rating: 4.2,
    fees: 550,
    experience: 9,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Ritu Saxena",
    specialization: "Neurologist",
    location: "Noida",
    rating: 4.8,
    fees: 910,
    experience: 13,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Tarun Gupta",
    specialization: "General Physician",
    location: "Gwalior",
    rating: 4.4,
    fees: 430,
    experience: 8,
    image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?semt=ais_hybrid&w=740"
  }
];

module.exports = doctors;
