/* eslint-disable react/prop-types */
import {
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

function BarChartComponent({ data, title }) {
  return (
    <div className="w-full bg-white">
      <p className="text-lg font-bold px-10 py-4 border-b border-zinc-400 bg-zinc-800 text-white">
        {title}
      </p>

      <div className="p-10 pl-0">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" />
            <YAxis dataKey="count" />
            <Tooltip />
            <Bar dataKey="count" fill="#27272a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartComponent;
