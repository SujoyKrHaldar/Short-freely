/* eslint-disable react/prop-types */
import {
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const LineChartComponent = ({ data, title }) => (
  <div className="w-full bg-white">
    <p className="text-lg font-bold px-10 py-4 border-b border-zinc-400 bg-zinc-800 text-white">
      {title}
    </p>

    <div className="p-10 pl-0">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#ef4444"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default LineChartComponent;
