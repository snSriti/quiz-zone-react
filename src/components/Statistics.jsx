import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TopicsContext } from "../Main";
import "../css/Statistics.css";

const Statistics = () => {
  const topics = useContext(TopicsContext);
  return (
    <div className="w-12/9 container mx-auto">
      <h1 className="text-3xl font-bold leading-none text-neutral mx-3 pt-8">
       Our Quiz Analytics
      </h1>
      <ResponsiveContainer className="bar-chart" width="50%" height={400}>
        <BarChart
          data={topics}
          margin={{
            top: 5,
            right: 30,
            left: -15,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="total"
            fill="#166534"
            background={{ fill: "#CBD5E1" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
