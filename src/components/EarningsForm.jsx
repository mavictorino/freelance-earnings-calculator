import React, { useState } from "react";
import { db } from "../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const EarningsForm = ({ onSaveEarnings }) => {
  const [formData, setFormData] = useState({
    hourlyRate: "",
    hoursWorked: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { hourlyRate, hoursWorked, date } = formData;

    //validaiton
    if (!hourlyRate || !hoursWorked || !date) {
      setError("All fields are required!");
      return;
    }
    if (isNaN(hourlyRate) || isNaN(hoursWorked)) {
      setError("Hourly rate and hours worked must be numbers!");
      return;
    }
    if (hourlyRate <= 0 || hoursWorked <= 0) {
      setError("Values must be greater than 0.");
      return;
    }

    const dailyEarnings = parseFloat(hourlyRate) * parseFloat(hoursWorked);

    
    try {
      const docRef = await addDoc(collection(db, "earnings"), {
        date,
        hourlyRate: parseFloat(hourlyRate),
        hoursWorked: parseFloat(hoursWorked),
        dailyEarnings,
      });
      console.log("Document written with ID: ", docRef.id);

      // Reset form
      setFormData({ hourlyRate: "", hoursWorked: "", date: "" });
      setError("");
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to save data, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="hourlyRate">Hourly Rate:</label>
        <input
          type="text"
          id="hourlyRate"
          name="hourlyRate"
          value={formData.hourlyRate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hoursWorked">Hours Worked:</label>
        <input
          type="text"
          id="hoursWorked"
          name="hoursWorked"
          value={formData.hoursWorked}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Earnings</button>
    </form>
  );
};

export default EarningsForm;
