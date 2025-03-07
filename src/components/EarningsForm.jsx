import React, { useState } from "react";
import { db } from "../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { DatePicker, Input, Button, message } from "antd";
import moment from "moment";

const EarningsForm = ({ onSaveEarnings }) => {
  const [formData, setFormData] = useState({
    hourlyRate: "",
    hoursWorked: "",
    date: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date ? date.format("YYYY-MM-DD") : null, 
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

      // reset form
      setFormData({ hourlyRate: "", hoursWorked: "", date: null });
      setError("");
      message.success("Earnings saved!")
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to save data, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="form-field">
        <label htmlFor="hourlyRate">Hourly Rate:</label>
        <Input
          type="text"
          id="hourlyRate"
          name="hourlyRate"
          value={formData.hourlyRate}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="hoursWorked">Hours Worked:</label>
        <Input
          type="text"
          id="hoursWorked"
          name="hoursWorked"
          value={formData.hoursWorked}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="date">Date: </label>
        <DatePicker
          value={formData.date ? moment(formData.date) : null} 
          onChange={handleDateChange}
          format="YYYY-MM-DD"
        />
      </div>
      <div className="submit-button">
      <Button type="primary" htmlType="submit">Save Earnings</Button>
      </div>
    </form>
  );
};

export default EarningsForm;
