import React from "react";
import { Descriptions } from "antd";
import { transformToWeatherDescription } from "../helpers/cityManagement.utils";

const WeatherInformation = ({ data }) => {
  return (
    <Descriptions
      className="weather-information-container"
      bordered
      title={data.location}
      items={transformToWeatherDescription(data)}
    />
  );
};

export default WeatherInformation;
