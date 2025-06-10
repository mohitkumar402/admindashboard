import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 800 },
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
