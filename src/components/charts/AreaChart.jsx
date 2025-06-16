import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', value: 300 },
  { name: 'Week 2', value: 500 },
  { name: 'Week 3', value: 700 },
  { name: 'Week 4', value: 400 },
  { name: 'Week 5', value: 600 },
  { name: 'Week 6', value: 800 },
  { name: 'Week 7', value: 1000 },
  { name: 'Week 8', value: 1200 },
  { name: 'Week 9', value: 900 },
  { name: 'Week 10', value: 1100 }
];

const AreaChartComp = () => (
  <div className="card">
    <h3>Area Chart</h3>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#10b981" fill="#a7f3d0" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default AreaChartComp;
