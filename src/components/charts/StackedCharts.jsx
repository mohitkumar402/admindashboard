import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../../styles/linechart.css"; 
const data = [
  { month: 'Jan', productA: 35, productB: 20 },
  { month: 'Feb', productA: 25, productB: 30 },
  { month: 'Mar', productA: 45, productB: 15 },
  { month: 'Apr', productA: 30, productB: 25 },
  { month: 'May', productA: 50, productB: 20 },
  { month: 'Jun', productA: 40, productB: 30 },
  { month: 'Jul', productA: 55, productB: 25 },
  { month: 'Aug', productA: 60, productB: 35 },
  { month: 'Sep', productA: 70, productB: 30 },
  { month: 'Oct', productA: 65, productB: 40 },
  { month: 'Nov', productA: 80, productB: 45 },
  { month: 'Dec', productA: 90, productB: 50 },
];

const StackedChart = () => (
  <div className="card">
    <h3>Stacked Chart</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="productA" stackId="a" fill="#8884d8" />
        <Bar dataKey="productB" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default StackedChart;
