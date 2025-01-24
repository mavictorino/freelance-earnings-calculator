import React, { useEffect, useState } from "react";
import { fetchEarningsFromFirestore } from "../services/firestoreUtils";

const EarningsSummary = () => {
    const [earnings, setEarnings] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const earningsData = await fetchEarningsFromFirestore();
                setEarnings(earningsData);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Earnings Summary</h2>
            {error && <p>{error}</p>}
            {earnings.length === 0 ? (
                <p>No earnings data available</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Hourly Rate</th>
                            <th>Hours Worked</th>
                            <th>Daily Earnings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {earnings.map((entry) => (
                            <tr key={entry.id}>
                                <td>{entry.date}</td>
                                <td>{entry.hourlyRate}</td>
                                <td>{entry.hoursWorked}</td>
                                <td>{entry.dailyEarnings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );

};


export default EarningsSummary;