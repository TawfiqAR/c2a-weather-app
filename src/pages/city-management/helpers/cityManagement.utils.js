import { CloudOutlined, HeatMapOutlined } from "@ant-design/icons";
import React from "react";

export const transformToWeatherDescription = (data) => {
  return [
    {
      key: "1",
      label: "Current temperature",
      children: (
        <span>
          <HeatMapOutlined /> {`${data.current.temperature}°C`}
        </span>
      ),
    },
    {
      key: "2",
      label: "Description",
      children: (
        <span>
          <CloudOutlined /> {data.current.weatherDescription}
        </span>
      ),
    },
    {
      key: "3",
      label: "Humidity",
      children: <span>{data.current.humidity}</span>,
    },
    {
      key: "4",
      label: "Wind Speed",
      children: <span>{`${data.current.windSpeed} km/h`}</span>,
    },
  ];
};
