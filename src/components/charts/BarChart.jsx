import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 300 },
  { name: 'Tue', value: 700 },
  { name: 'Wed', value: 500 },
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
