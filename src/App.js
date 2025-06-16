import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import NotificationsPage from './pages/Notification';
import Kanban from './pages/Kanban';
import ColorPicker from './pages/colorpicker';
import Header from './components/Header';
import SettingsPage from './pages/Setting';
import Accountpage from './pages/Profile';
import Sidebar from './components/Sidebar';
import Colormapping from './pages/Colormapping';
import LineChartpage from './components/charts/LineChart';
import BarChartPage from './components/charts/BarChart';
import AreaChartPage from './components/charts/AreaChart';
import PieChartPage from './components/charts/PieChart';
import StackedChart from './components/charts/StackedCharts';
import FinancialPage from './pages/FinancialPage';
import Orderpage from './pages/Order';
import CustomerPage from './pages/Customer';
import EmployeePage from './pages/Employee';
import EditorPage from './pages/Editorpage';

import './App.css'; // Assuming global styles and layout CSS

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Fixed Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} />

        {/* Main content area */}
        <div className="main-content">
          {/* Fixed Header */}
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

          {/* Page Routes */}
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/editor" element={<div>Editor Page</div>} />
              <Route path="/charts/line" element={<LineChartpage />} />
              <Route path="/colormapping" element={<Colormapping/>} />
              <Route path="/editorpage" element={<EditorPage />} />
              <Route path="/Setting" element={<SettingsPage />} />

              <Route path="/Profile" element={<Accountpage />} />

              <Route path="/Notifications" element={<NotificationsPage />} />
              <Route path="/charts/bar" element={<BarChartPage />} />
              <Route path="/charts/area" element={<AreaChartPage />} />
              <Route path="/charts/pie" element={<PieChartPage />} />
              <Route path="/charts/stacked" element={<StackedChart />} />
              <Route path="/financial" element={<FinancialPage />} />
              <Route path="/Order" element={<Orderpage />} />    
              <Route path="/Customer" element={<CustomerPage />} />  
              <Route path="/employees" element={<EmployeePage />} />              
              {/* Add more routes as needed */}
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
