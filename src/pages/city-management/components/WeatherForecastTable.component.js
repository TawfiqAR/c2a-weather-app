import { Table } from "antd";
import React from "react";
import { weatherForecastTableColumns } from "../helpers/cityManagement.config";

const WeatherForecastTable = ({ data }) => {
  return (
    <Table
      dataSource={data}
      columns={weatherForecastTableColumns}
      pagination={false}
    />
  );
};

export default WeatherForecastTable;
