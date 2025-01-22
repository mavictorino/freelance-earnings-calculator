import { useState } from "react";

const EarningsForm = ({ onSaveEarnings }) => {
    const [hourlyRate, setHourlyRate] = useState("");
    const [hoursWorked, setHoursWorked] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const dailyEarnings = parseFloat(hourlyRate) * parseFloat(hoursWorked);

        onSaveEarnings({
            date,
            hourlyRate: parseFloat(hourlyRate),
            hoursWorked: parseFloat(hoursWorked),
            dailyEarnings,
        });

        setHourlyRate("");
        setHoursWorked("");
        setDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Hourly Rate ($):</label>
                <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    required
                    step="0.01"
                    min="0"
                />

            </div>
            <div>
                <label>Hours Worked:</label>
                <input
                    type="number"
                    value={hoursWorked}
                    onChange={(e) => setHoursWorked(e.target.value)}
                    required

                />
            </div>

            <button type="submit">Save Earnings</button>
        </form>
    );
}

export default EarningsForm;