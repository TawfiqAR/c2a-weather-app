import React from "react";
import {
  CalendarOutlined,
  CloudOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";

export const weatherForecastTableColumns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => (
      <span>
        <CalendarOutlined /> {text}
      </span>
    ),
  },
  {
    title: "Minimum temperature",
    dataIndex: "minTemperature",
    key: "minTemperature",
    render: (text) => (
      <span>
        <HeatMapOutlined /> {`${text}°C`}
      </span>
    ),
  },
  {
    title: "Maximum temperature",
    dataIndex: "maxTemperature",
    render: (text) => (
      <span>
        <HeatMapOutlined /> {`${text}°C`}
      </span>
    ),
  },
  {
    title: "Description",
    dataIndex: "weatherDescription",
    key: "weatherDescription",
    render: (text) => (
      <span>
        <CloudOutlined /> {text}
      </span>
    ),
  },
];
