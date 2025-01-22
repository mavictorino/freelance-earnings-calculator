import React from "react";

const EarningsSummary = ({ earnings }) => {
    const calculateTotal = (timeFrame) => {
        const now = new Date();

        return earnings
        .filter(({ date }) => {
            const earningDate = new Date(date);
            if (timeFrame === "week") {
                const weekAgo = new Date();
                weekAgo.setDate(now.getDate() - 7);
                return earningDate >= weekAgo && earningDate <= now;
            }
            if (timeFrame === "month") {
                return earningDate.getMonth() === now.getMonth() && earningDate.getFullYear() === now.getFullYear();
            }
            return false;
        })
        .reduce((total, { dailyEarnings }) => total + dailyEarnings, 0)
        .toFixed(2);
    };

    return (
        <div>
            <h2>Earnings Summary</h2>
            <p>Weekly Earnings:${calculateTotal("week")}</p>
            <p>Monthly Earnings:${calculateTotal("month")}</p>
            
        </div>
    );
};

export default EarningsSummary;