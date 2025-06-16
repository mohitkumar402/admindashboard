import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ['Communication', 'Teamwork', 'Technical Skills', 'Problem Solving', 'Leadership'],
  datasets: [{
    label: 'Team A',
    data: [65, 59, 90, 81, 56],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2
  }]
};

export default function RadarChartComp() {
  return <Radar data={data} />;
}
