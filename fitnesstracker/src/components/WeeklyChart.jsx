import React from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const data = [
  { day: "Mon", steps: 400, workout: 10 },
  { day: "Tue", steps: 7000, workout: 45 },
  { day: "Wed", steps: 5000, workout: 20 },
  { day: "Thu", steps: 6000, workout: 35 },
  { day: "Fri", steps: 6000, workout: 35 },
  { day: "Sat", steps: 8000, workout: 70 },
  { day: "Sun", steps: 4000, workout: 15 }
];

export default function WeeklyChart() {
  return (
    <div style={styles.chart}>
      <h3 style={{ color: "green" }}> Weekly Summary</h3>
    <ResponsiveContainer width="100%" height={250}>
  <AreaChart data={data}>
    <defs>
      <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" stroke="#555"/>
    <XAxis dataKey="day" stroke="white" />
    <YAxis stroke="white" />
    <Tooltip />
    <Area type="monotone" dataKey="steps" stroke="#82ca9d" fillOpacity={1} fill="url(#colorSteps)" />
  </AreaChart>
</ResponsiveContainer>

    </div>
  );
}

const styles = {
  chart: {
    background: "#4f949dff",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px"
  }
};
