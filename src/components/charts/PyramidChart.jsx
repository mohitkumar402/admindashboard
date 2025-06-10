import React from 'react';
import { PyramidChart as SyncPyramidChart, Inject, PyramidSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, Legend } from '@syncfusion/ej2-react-charts';

const data = [
  { x: 'Website', y: 120 },
  { x: 'Email', y: 100 },
  { x: 'Referral', y: 60 },
  { x: 'Social', y: 80 },
];

const PyramidChartComp = () => (
  <div className="card">
    <h3>Pyramid Chart</h3>
    <SyncPyramidChart tooltip={{ enable: true }}>
      <Inject services={[PyramidSeries, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          type="Pyramid"
          width="45%"
          height="80%"
          neckWidth="15%"
          gapRatio={0.03}
          explode
        />
      </SeriesCollectionDirective>
    </SyncPyramidChart>
  </div>
);

export default PyramidChartComp;
