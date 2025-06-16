import React, { useState } from 'react'
import "../styles/Financial.css"; 

const financialData = [
  { id: 1, date: '2025-01-15', category: 'Revenue', amount: 5000 },
  { id: 2, date: '2025-02-10', category: 'Expense', amount: 2500 },
  { id: 3, date: '2025-03-22', category: 'Revenue', amount: 6200 },
  { id: 4, date: '2025-04-05', category: 'Expense', amount: 3100 },
  { id: 5, date: '2025-05-12', category: 'Revenue', amount: 7500 },
  { id: 6, date: '2025-06-18', category: 'Expense', amount: 4200 },
];

const FinancialPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All'
    ? financialData
    : financialData.filter(item => item.category === filter);

  const totalRevenue = filteredData
    .filter(item => item.category === 'Revenue')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = filteredData
    .filter(item => item.category === 'Expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const netProfit = totalRevenue - totalExpense;

  return (
    <div className="financial-page">
      <h2>Financial Overview</h2>

      <div className="filter-section">
        <label>Filter by Category: </label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Revenue">Revenue</option>
          <option value="Expense">Expense</option>
        </select>
      </div>

      <div className="stats-cards">
        <div className="card revenue">Total Revenue: ₹{totalRevenue}</div>
        <div className="card expense">Total Expense: ₹{totalExpense}</div>
        <div className="card profit">Net Profit: ₹{netProfit}</div>
      </div>

      <table className="financial-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialPage;
