import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import "../../styles/linechart.css"; // Assuming you have a CSS file for styling
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1200 },
  { name: 'Aug', value: 1100 },
  { name: 'Sep', value: 1300 },
  { name: 'Oct', value: 1400 },
  { name: 'Nov', value: 1600 },
  { name: 'Dec', value: 1800 }
];


const LineChartComp = () => (
  <div className="card">
    <h3>Line Chart</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="value" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartComp;
