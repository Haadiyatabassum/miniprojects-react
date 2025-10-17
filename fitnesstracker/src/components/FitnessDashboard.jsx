import React from "react";
import Sidebar from "./Sidebar";
import MetricCard from "./MetricCard";
import WeeklyChart from "./WeeklyChart";

export default function FitnessDashboard() {
  const metrics = [
    { label: "Steps", value:10000 , goal: 10000, unit: "steps", emoji: "🏃‍♂️‍➡️" },
    { label: "Water", value: 1, goal: 3, unit: "L", emoji: "💦" },
    { label: "Calories", value: 800, goal: 2000, unit: "kcal", emoji: "🔥" },
    { label: "Workout", value: 40, goal: 60, unit: "min", emoji: "🏋️" }
  ];

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.dashboard}>
        <h1 style={{ color: "yellow",textAlign:"center" }}>Fitness Progress Tracker</h1>
        <div style={styles.grid}>
          {metrics.map((m, i) => (
            <MetricCard key={i} metric={m} />
          ))}
          
        </div>
        <WeeklyChart />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    background: "#e7c6f4ff",
    minHeight: "100vh"
  },
  dashboard: {
    flex: 1,
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "40px"
  }
};
