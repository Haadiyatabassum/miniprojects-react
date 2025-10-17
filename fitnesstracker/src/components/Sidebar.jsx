import { FaHome, FaUsers, FaDumbbell, FaChartLine, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div style={styles.sider} className="sider">

      <h2 style={styles.title}>Fitness Pro</h2>
      <ul style={styles.menu}>
        <li style={styles.menuItem}><FaHome style={styles.icon}/> <span className="label">Dashboard</span></li>
       <li style={styles.menuItem}><FaUsers style={styles.icon}/> <span className="label">Community</span></li>
       <li style={styles.menuItem}><FaDumbbell style={styles.icon}/> <span className="label">Training</span></li>
       <li style={styles.menuItem}><FaChartLine style={styles.icon}/> <span className="label">Analytics</span></li>
      <li style={styles.menuItem}><FaCog style={styles.icon}/> <span className="label">Settings</span></li>
      </ul>
    </div>
  );

}

const styles = {
  sider: {
    width: "250px",
    background: "#734c8bff",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  title: { fontSize: "28px", margin: 0,color:"yellow" },
  menu: { listStyle: "none", padding: 0, margin: 0 },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "10px 0",
    cursor: "pointer",
    transition: "0.2s",
    
  },
  icon: { fontSize: "28px" },
};