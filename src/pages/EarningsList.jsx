import React, { useState, useEffect } from "react";
import { fetchEarningsFromFirestore } from "../services/firestoreUtils";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import { saveAs } from "file-saver";

const EarningsList = () => {
    const [earnings, setEarnings] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEarningsFromFirestore();
                setEarnings(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    // filter by date
    const filteredEarnings = earnings.filter(entry =>
        entry.date && entry.date.includes(searchText)
    );

    // export data as CSV
    const exportToCSV = () => {
        const csvData = [
            ["Date", "Hourly Rate", "Hours Worked", "Daily Earnings"],
            ...earnings.map(e => [e.date, e.hourlyRate, e.hoursWorked, e.dailyEarnings])
        ]
            .map(row => row.join(","))
            .join("\n");

        const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "earnings.csv");
    };

    const columns = [
        {
            title: "📅 Date",
            dataIndex: "date",
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
        },
        {
            title: "💵 Hourly Rate",
            dataIndex: "hourlyRate",
            sorter: (a, b) => a.hourlyRate - b.hourlyRate,
            render: (rate) => `$${rate.toFixed(2)}`,
        },
        {
            title: "⏳ Hours Worked",
            dataIndex: "hoursWorked",
            sorter: (a, b) => a.hoursWorked - b.hoursWorked,
        },
        {
            title: "💰 Daily Earnings",
            dataIndex: "dailyEarnings",
            sorter: (a, b) => a.dailyEarnings - b.dailyEarnings,
            render: (earnings) => `$${earnings.toFixed(2)}`,
        },
    ];

    return (
        <div className="earnings-list-container">
            <h1>📋 All Earnings</h1>

            
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Search by date (YYYY-MM-DD)"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: 200 }}
                    suffix={<SearchOutlined />}
                />
                <Button type="primary" icon={<DownloadOutlined />} onClick={exportToCSV}>
                    Export CSV
                </Button>
            </Space>

           
            <Table 
                columns={columns} 
                dataSource={filteredEarnings} 
                rowKey="id" 
                pagination={{ pageSize: 10 }} 
                bordered
            />
        </div>
    );
};

export default EarningsList;