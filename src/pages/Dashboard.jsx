import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiDollarSign, FiUsers, FiBox, FiTrendingUp, FiRepeat, FiCheckSquare, FiPhoneCall } from "react-icons/fi";
import { GoDotFill } from 'react-icons/go';

import Sidebar from '../components/Sidebar';
import WidgetCard from "../components/Cards/WidgetCard";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import AreaChart from "../components/charts/AreaChart";

import { useStateContext } from '../Context/ThemeContext';

import '../styles/Dashboard.css';

const earningData = [
  {
    title: "Budget",
    amount: "$93,438",
    percentage: "+23%",
    icon: <BsCurrencyDollar />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "positive"
  },
  {
    title: "Expense",
    amount: "$48,487",
    percentage: "-12%",
    icon: <BsCurrencyDollar />,
    iconColor: "#FF5C8E",
    iconBg: "#FFE8F1",
    pcColor: "negative"
  },
  {
  title: "Expense",
  amount: "$48,487",
  percentage: "-12%",
  icon: <BsCurrencyDollar />,
  iconColor: "#FF5C8E",
  iconBg: "#FFE8F1",
  pcColor: "negative"
},
{
  title: "Expense",
  amount: "$48,487",
  percentage: "-12%",
  icon: <BsCurrencyDollar />,
  iconColor: "#FF5C8E",
  iconBg: "#FFE8F1",
  pcColor: "negative"
},
];

const Dashboard = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="dashboard-layout">
      <Sidebar />

  <div className="dashboard-container">
  <h1 className="dashboard-title">Admin Dashboard</h1>

  {/*  Unified Roll Container */}
  <div className="section-container rounded-scroll-container">
    <h2 className="section-title">Quick Stats</h2>

    <div className="scroll-x-container">
      <WidgetCard icon={<FiDollarSign />} label="Total Revenue" value="$1,20,000" />
      <WidgetCard icon={<FiDollarSign />} label="Earnings" value="$63,448.78" />
      <WidgetCard icon={<FiUsers />} label="Customers" value="39,354" />
      <WidgetCard icon={<FiBox />} label="Products" value="4,396" />
      <WidgetCard icon={<FiTrendingUp />} label="Sales" value="423,390" />
      <WidgetCard icon={<FiRepeat />} label="Refunds" value="39,354" />
    </div>
  </div>


        {/* Inboxes/Phones - Unified Section */}
        <div className="section-container unified-section">
          <h2>Inboxes/Phones</h2>
         <break>  </break>
            <div className="unified-card hover-transition">
              <div className="unified-card-icon" style={{ backgroundColor: currentColor }}>
                <FiUsers />
              </div>
              <p className="unified-card-title">Customer Inboxes</p>
              <p className="unified-card-value">1,234</p>
            </div>
            <div className="unified-card hover-transition">
              <div className="unified-card-icon" style={{ backgroundColor: currentColor }}>
                <FiBox />
              </div>
              <p className="unified-card-title">Product Phones</p>
              <p className="unified-card-value">567</p>
            
            </div>
             <div className="unified-card hover-transition">
               <div className="unified-card-icon" style={{ backgroundColor: currentColor }}>
                <FiCheckSquare />
   </div>
   <p className="unified-card-title">Customer mails</p>
   <p className="unified-card-value">1,23400</p>
 </div>
 <div className="unified-card hover-transition">
   <div className="unified-card-icon" style={{ backgroundColor: currentColor }}>
     <FiPhoneCall />
   </div>
   <p className="unified-card-title"> Phones</p>
   <p className="unified-card-value">5670</p>

 
 </div>
   <div className="unified-card hover-transition">
   <div className="unified-card-icon" style={{ backgroundColor: currentColor }}>
      <FiPhoneCall />
      </div>
      <p className="unified-card-title">Phones</p>
      <p className="unified-card-value">5670</p>
      </div>        
        </div>

        {/* Earnings Section */}
        <div className="section-container earnings-section">
          <h2>Earnings Overview</h2>
          <div className="earnings-card">
            <div className="earnings-content">
              <div>
                <p className="earnings-title">Total Earnings</p>
                <p className="earnings-amount">$63,448.78</p>
              </div>
              <button type="button" style={{ backgroundColor: currentColor }} className="earnings-icon">
                <BsCurrencyDollar />
              </button>
            </div>
            <button style={{ backgroundColor: currentColor }} className="btn-primary">Download</button>
          </div>

          <div className="earning-cards">
            {earningData.map((item) => (
              <div key={item.title} className="earning-card hover-transition">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="earning-card-icon"
                >
                  {item.icon}
                </button>
                <p className="earning-card-amount">
                  {item.amount}
                  <span className={`earning-card-percentage ${item.pcColor}`}>{item.percentage}</span>
                </p>
                <p className="earning-card-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Charts Section */}
        <div className="section-container scroll-x">
          <h2 className="section-title">Data Charts</h2>
          <div className="chart-card hover-transition"><LineChart /></div>
          <div className="chart-card hover-transition"><BarChart /></div>
          <div className="chart-card hover-transition"><PieChart /></div>
          <div className="chart-card hover-transition"><AreaChart /></div>
          <div className="chart-card hover-transition"><LineChart /></div>
          <div className="chart-card hover-transition"><BarChart /></div>       
        </div>

        {/* Revenue Updates Section */}
        <div className="section-container revenue-section scroll-x">
          <h2 className="section-title">Revenue Updates</h2>

          <div className="revenue-card hover-transition">
            <div className="revenue-header">
              <p className="revenue-title">Revenue</p>
              <div className="revenue-tags">
                <p className="revenue-expense"><GoDotFill /> Expense</p>
                <p className="revenue-budget"><GoDotFill /> Budget</p>
              </div>
            </div>
          </div>

          <div className="monthly-earnings hover-transition" style={{ backgroundColor: currentColor }}>
            <p className="monthly-earnings-title">Earnings</p>
            <div className="monthly-amount">
              <p className="amount">$63,448.78</p>
              <p className="monthly-desc">Monthly revenue</p>
            </div>
          </div>
        
    <div className="revenue-card hover-transition">
      <div className="revenue-header">
        <p className="revenue-title">loss amount</p>
        <div className="revenue-tags">
          <p className="revenue-expense"><GoDotFill /> Total loss</p>
          <p className="revenue-budget"><GoDotFill /> Budget</p>
        </div>
      </div>
      <div className="revenue-amount">
        <p className="amount">$168,345.67</p>
        <p className="revenue-desc">Total loss this month</p>
          </div>
        </div>
      <div className="revenue-card hover-transition">
  <div className="revenue-header">
    <p className="revenue-title">gain amount</p>
    <div className="revenue-tags">
      <p className="revenue-expense"><GoDotFill /> Total loss</p>
      <p className="revenue-budget"><GoDotFill /> Budget</p>
    </div>
  </div>
  <div className="revenue-amount">
    <p className="amount">$168,345.67</p> 
    <p className="revenue-desc">Total gain this month</p>
  </div>
  <div className="revenue-amount">
    <p className="amount">$12,2566.52</p>
    <p className="revenue-desc">Total loss this month</p>
      </div>

    </div>
    </div>

        {/* Quick Stats */}
        
        <div className="section-container quick-stats grid-container">
          <h2 className="section-title">Quick Stats</h2>
          <div className="grid-card hover-transition"><h3>Total Sales</h3><p>1,234 this month</p></div>
          <div className="grid-card hover-transition"><h3>Active Users</h3><p>1,234 this month</p></div>
          <div className="grid-card hover-transition"><h3>Orders Processed</h3><p>1,234 this month</p></div>
          <div className="grid-card hover-transition"><h3>Support Tickets</h3><p>320 this week</p></div>
          <div className="grid-card hover-transition"><h3>New Users</h3><p>320 this week</p></div>
          <div className="grid-card hover-transition"><h3>Pending Orders</h3><p>56 orders</p></div>
          <div className="grid-card hover-transition"><h3>Revenue Growth</h3><p>+18% from last month</p></div>
          <div className="grid-card hover-transition"><h3>Refund Requests</h3><p>12 pending</p></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
