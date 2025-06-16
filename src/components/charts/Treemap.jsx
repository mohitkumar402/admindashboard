import { ResponsiveTreeMap } from '@nivo/treemap';

const data = {
  name: 'Market',
  children: [
    { name: 'Segment A', value: 400 },
    { name: 'Segment B', value: 300 },
    { name: 'Segment C', value: 200 },
    { name: 'Segment D', value: 100 },
  ]
};

export default function TreemapChart() {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveTreeMap
        data={data}
        identity="name"
        value="value"
        colors={{ scheme: 'nivo' }}
        labelSkipSize={12}
        labelTextColor="#000"
        borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      />
    </div>
  );
}
