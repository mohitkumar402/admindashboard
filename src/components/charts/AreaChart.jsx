import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', value: 300 },
  { name: 'Week 2', value: 500 },
  { name: 'Week 3', value: 700 },
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
