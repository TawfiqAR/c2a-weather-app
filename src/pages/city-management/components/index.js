import { Input } from "antd";
import React, { useState } from "react";
import WeatherForecastTable from "./WeatherForecastTable.component";
import { mockedJerusalemWeather } from "../../../mocks/weather.mock";
import WeatherInformation from "./WeatherInformation.component";
import { getWeather } from "../../../apis/weather.api";

const CityManagement = () => {
  const [cityWeather, setCityWeather] = useState(null);

  const onSearch = async (value, _e, info) => {
    const weather = await getWeather(value);
    setCityWeather(weather);
  };

  return (
    <>
      <Input.Search
        className="search-input"
        placeholder="Search city"
        onSearch={onSearch}
        enterButton
      />

      {cityWeather && (
        <>
          <WeatherInformation data={cityWeather} />
          <WeatherForecastTable data={cityWeather?.forecast} />
        </>
      )}
    </>
  );
};

export default CityManagement;
