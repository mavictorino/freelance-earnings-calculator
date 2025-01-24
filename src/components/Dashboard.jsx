import React, { useState } from "react";
import EarningsForm from "./EarningsForm";
import EarningsSummary from "./EarningsSummary";

const Dashboard = () => {
    const [earnings, setEarnings] = useState([]);

    const handleSaveEarnings = (newEarning) => {
        setEarnings((prev) => [...prev, newEarning]); 
    };

    return (
        <div>
            <h1>Freelance Earnings Calculator</h1>
            <EarningsForm onSaveEarnings={handleSaveEarnings} />
            <EarningsSummary earnings={earnings} />
            <div>
                <h3>Daily Earnings Log:</h3>
                <ul>
                    {earnings.map((earning, index) => (
                        <li>
                            {earning.date}: ${earning.dailyEarnings.toFixed(2)} (Rate: ${earning.hourlyRate}/hr, Hours: {earning.hoursWorked})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;