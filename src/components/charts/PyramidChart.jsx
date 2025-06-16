import React from 'react';
import FunnelChart from 'react-funnel-chart';

const data = [
  ['Website', 120],
  ['Email', 100],
  ['Referral', 60],
  ['Social', 80],
  ['Direct', 40],
  ['Other', 20]
];

const FunnelChartComponent = () => (
  <div className="card">
    <h3>Funnel Chart</h3>
    <FunnelChart
      data={data}
      colors={['#ff6a00', '#ee0979', '#67d40d', '#17ead9', '#6078ea']}
      height={400}
    />
  </div>
);

export default FunnelChartComponent;
