import React, { useState } from "react";
import EarningsForm from "./EarningsForm";

const TestEarningsForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSaveEarnings = (data) => {
    console.log("Form Submitted:", data); 
    setSubmittedData(data);
  };

  return (
    <div>
      <h1>Test EarningsForm</h1>
      <EarningsForm onSaveEarnings={handleSaveEarnings} />
      {submittedData && (
        <div>
          <h2>Form Output:</h2>
          <p>Date: {submittedData.date}</p>
          <p>Hourly Rate: ${submittedData.hourlyRate}</p>
          <p>Hours Worked: {submittedData.hoursWorked}</p>
          <p>Daily Earnings: ${submittedData.dailyEarnings}</p>
        </div>
      )}
    </div>
  );
};

export default TestEarningsForm;