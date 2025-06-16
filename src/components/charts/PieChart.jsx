import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 70 },
  { name: 'C', value: 50 },
  { name: 'D', value: 20 },
  { name: 'E', value: 40 }
];

const COLORS = ['#0088FE', '#00C49F'];

const PieChartComp = () => (
  <div className="card">
    <h3>Pie Chart</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="value" outerRadius={80} label>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PieChartComp;
