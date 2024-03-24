import axios from "axios";
import {
  mockedJerusalemWeather,
  mockedTelavivWeather,
} from "../mocks/weather.mock";

export const getWeather = (cityName) => {
  //const response = axios.get(`weather/${cityName}`);

  if (cityName === "Jerusalem") {
    return mockedJerusalemWeather;
  }

  if (cityName === "Tel Aviv") {
    return mockedTelavivWeather;
  }

  return null;
};
