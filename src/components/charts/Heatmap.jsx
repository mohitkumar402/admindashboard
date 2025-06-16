import HeatMap from 'react-heatmap-grid';

const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const yLabels = ['0h', '4h', '8h', '12h', '16h', '20h'];
const data = new Array(yLabels.length).fill(0).map(() =>
  new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
);

export default function HeatmapChart() {
  return (
    <HeatMap
      xLabels={xLabels}
      yLabels={yLabels}
      data={data}
      squares
      height={40}
      background="white"
      cellStyle={(background, value, min, max, data, x, y) => ({
        background: `rgb(66, 86, 244, ${value / 100})`,
        fontSize: "11px",
        color: "#000"
      })}
    />
  );
}
