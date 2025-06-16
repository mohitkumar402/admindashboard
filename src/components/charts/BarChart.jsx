import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 300 },
  { name: 'Tue', value: 700 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 600 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1200 }
];

const BarChartComp = () => (
  <div className="card">
    <h3>Bar Chart</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill="#f97316" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartComp;
