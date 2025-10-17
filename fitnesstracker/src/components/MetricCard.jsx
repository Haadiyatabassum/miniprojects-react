import React from "react";

export default function MetricCard({ metric }) {
  if (!metric) return null;

  const percentage = metric.goal > 0
    ? Math.min((metric.value / metric.goal) * 100, 100)
    : 0;

  let message = null;
  let messageStyle = {};

  if (percentage >= 100) {
    message = "🎯 Goal Met!";
    messageStyle = { color: "green" };
  } else if (percentage < 70) {
    message = "⚠️ Keep going!";
    messageStyle = { color: "orange" };
  } else {
    message = "👍 On track!";
    messageStyle = { color: "skyblue" };
  }

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>
        {metric.emoji} {metric.label}
      </h3>
      <p>{metric.value} / {metric.goal} {metric.unit}</p>
      
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressFill, width: `${percentage}%` }} />
      </div>

      <span style={{ fontWeight: "bold", ...messageStyle }}>{message}</span>
    </div>
  );
}

const styles = {
  card: {
    background: "#2b1541ff",
    padding: "20px",
    borderRadius: "12px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: "1 1 200px", 
    boxSizing: "border-box"
  },
  title: { margin: 0 },
  progressBar: {
    width: "100%",
    height: "10px",
    background: "#444",
    borderRadius: "5px",
    overflow: "hidden"
  },
  progressFill: {
    height: "100%",
    background: "limegreen",
    transition: "width 0.3s ease"
  }
};

