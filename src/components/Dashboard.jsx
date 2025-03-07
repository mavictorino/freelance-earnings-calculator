import React, { useState, useEffect } from "react";
import { fetchEarningsFromFirestore } from "../services/firestoreUtils";
import EarningsForm from "./EarningsForm";
import { Card, Button } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

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
      <h1 className="title">Keep your earnings on track!</h1>

      <div className="summary">
        <h3>Summary</h3>
        <p>
          Total Earnings: $
          {earnings.length > 0
            ? earnings
                .reduce((acc, e) => acc + (e.dailyEarnings || 0), 0)
                .toFixed(2)
            : "0.00"}
        </p>
        <p>
          Average Hourly Rate: $
          {earnings.length > 0
            ? (
                earnings.reduce((acc, e) => acc + (e.hourlyRate || 0), 0) /
                earnings.length
              ).toFixed(2)
            : "0.00"}
        </p>
        <p>
          Total Hours Worked:{" "}
          {earnings.length > 0
            ? earnings.reduce((acc, e) => acc + (e.hoursWorked || 0), 0)
            : "0"}
        </p>
      </div>

      <div className="form-container">
        <EarningsForm onSaveEarnings={handleSaveEarnings} />
      </div>

      <div className="latest-entries">
        <h3>Latest Entries</h3>
        <div className="latest-entries-cards">
          {earnings.slice(0, 3).map((earning) => (
            <Card key={earning.id} className="entry-card">
              <p>{earning.date}</p>
              <p>Earnings: ${earning.dailyEarnings.toFixed(2)}</p>
              <p>
                Rate: ${earning.hourlyRate}/hr, Hours: {earning.hoursWorked}
              </p>
            </Card>
          ))}
        </div>
        <Button type="link" href="/earnings">
          View All
        </Button>
      </div>

      <div className="chart-container">
        <h3>📈 Earnings Trend</h3>
        <div className="chart-wrapper">
          <LineChart width={400} height={250} data={earnings.slice(-7)}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="dailyEarnings" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
