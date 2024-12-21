/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["27272a", "#52525b", "#a1a1aa", "#e4e4e7"];

const PieChartComponent = ({ data, title }) => (
  <div className="w-full bg-white">
    <p className="text-lg font-bold px-10 py-4 border-b border-zinc-400 bg-zinc-800 text-white text-center">
      {title}
    </p>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          // paddingAngle={4}
          label
          labelLine
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PieChartComponent;
