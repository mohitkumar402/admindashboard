import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StackingColumnSeries, Category, Tooltip, Legend } from '@syncfusion/ej2-react-charts';

const data = [
  { month: 'Jan', productA: 35, productB: 20 },
  { month: 'Feb', productA: 25, productB: 30 },
  { month: 'Mar', productA: 45, productB: 15 },
];

const StackedChart = () => (
  <div className="card">
    <h3>Stacked Chart</h3>
    <ChartComponent primaryXAxis={{ valueType: 'Category' }} tooltip={{ enable: true }}>
      <Inject services={[StackingColumnSeries, Category, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName="month" yName="productA" type="StackingColumn" name="Product A" />
        <SeriesDirective dataSource={data} xName="month" yName="productB" type="StackingColumn" name="Product B" />
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>
);

export default StackedChart;
