import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className={`toggle-btn ${isCollapsed ? "collapsed" : ""}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {!isCollapsed && <h2 className="title">Admin Panel</h2>}

      <div className="sidebar-section">
        <h4>{!isCollapsed && "Dashboard"}</h4>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>📊</span>{!isCollapsed && "Dashboard"}
        </NavLink>
      </div>

      <div className="sidebar-section">
        <h4>{!isCollapsed && "Pages"}</h4>
        <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>📦</span>{!isCollapsed && "Orders"}
        </NavLink>
        <NavLink to="/employees" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>🧑‍💼</span>{!isCollapsed && "Employees"}
        </NavLink>
        <NavLink to="/customers" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>👥</span>{!isCollapsed && "Customers"}
        </NavLink>
      </div>

      <div className="sidebar-section">
        <h4>{!isCollapsed && "Apps"}</h4>
        <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>📅</span>{!isCollapsed && "Calendar"}
        </NavLink>
        <NavLink to="/kanban" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>🗂️</span>{!isCollapsed && "Kanban"}
        </NavLink>
        <NavLink to="/editor" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>✍️</span>{!isCollapsed && "Editor"}
        </NavLink>
        <NavLink to="/color-picker" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>🎨</span>{!isCollapsed && "Color Picker"}
        </NavLink>
      </div>

      <div className="sidebar-section">
        <h4>{!isCollapsed && "Charts"}</h4>
        <NavLink to="/charts/line" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>📈</span>{!isCollapsed && "Line"}
        </NavLink>
        <NavLink to="/charts/area" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>📉</span>{!isCollapsed && "Area"}
        </NavLink>
        <NavLink to="/charts/bar" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>📊</span>{!isCollapsed && "Bar"}
        </NavLink>
        <NavLink to="/charts/pie" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>🥧</span>{!isCollapsed && "Pie"}
        </NavLink>
        <NavLink to="/charts/financial" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>💰</span>{!isCollapsed && "Financial"}
        </NavLink>
        <NavLink to="/charts/color-mapping" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>🗺️</span>{!isCollapsed && "Color Mapping"}
        </NavLink>
        <NavLink to="/charts/pyramid" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>🔺</span>{!isCollapsed && "Pyramid"}
        </NavLink>
        <NavLink to="/charts/stacked" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>📚</span>{!isCollapsed && "Stacked"}
        </NavLink>
      </div>
    </div>
  );
}
