import React, { useEffect, useState } from "react";
import { db } from "../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const EarningsSummary = () => {
    const [earnings, setEarnings] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "earnings"));
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setEarnings(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError("Failed to fetch earnings data");
            }
        };

        fetchEarnings();
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