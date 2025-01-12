import { Legend } from "@headlessui/react";
import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ chartData }) => {
  // const chartData = {
  //   date: "01/20/2026",
  //   quantity: 4000,
  //   price: 2400,
  //   orders: 2400,
  // };
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <ComposedChart width={730} height={250} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area
          type="monotone"
          dataKey="orders"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="quantity" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Chart;