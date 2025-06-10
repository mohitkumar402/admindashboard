import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Topbar from './components/Header'; // Only keeping Topbar globally now
import './App.css';
import Sidebar from './components/Sidebar';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Topbar is common across all pages */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Routes with pages handling their own layouts (Sidebar inside Dashboard itself) */}
        <Routes>
          <Route path="/" element={<Dashboard isSidebarOpen={isSidebarOpen} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
