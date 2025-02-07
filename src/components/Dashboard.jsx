import React, { useState, useEffect } from "react";
import { fetchEarningsFromFirestore } from "../services/firestoreUtils";
import EarningsForm from "./EarningsForm";
import EarningsSummary from "./EarningsSummary";

const Dashboard = () => {
    const [earnings, setEarnings] = useState([]);

    const fetchEarnings = async () => {
        try {
            const earningsData = await fetchEarningsFromFirestore();
            setEarnings(earningsData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchEarnings();
    }, []);

    const handleSaveEarnings = async (newEarning) => {
        fetchEarnings();
    };

    return (
        <div className="dashboard-container">
            <h1 className="title">Freelance Earnings Calculator</h1>
            <div className="form-container">
                <EarningsForm onSaveEarnings={handleSaveEarnings} />
            </div>

            <div className="earnings-container">
                <EarningsSummary earnings={earnings} />
                <div className="daily-earnings">
                    <h3>Daily Earnings Log:</h3>
                    <ul>
                        {earnings.map((earning) => (
                            <li key={earning.id}>
                                {earning.date}: ${Number(earning.dailyEarnings || 0).toFixed(2)} (Rate: ${earning.hourlyRate}/hr, Hours: {earning.hoursWorked})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;