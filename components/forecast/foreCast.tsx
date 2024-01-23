"use client";
import { IForecast } from "@/interfaces/IForecast";
import { getForecast } from "@/services/getForecast.service";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

interface ForecastProps {
  lat: number;
  lon: number;
}
const Forecast: React.FC<ForecastProps> = ({ lat, lon }) => {
  const [fc, setFc] = useState<IForecast>();
  const forecasts = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18,
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          "3h": 0.26,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-08-30 15:00:00",
      },
      {
        dt: 1661882400,
        main: {
          temp: 295.45,
          feels_like: 295.59,
          temp_min: 292.84,
          temp_max: 295.45,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 71,
          temp_kf: 2.61,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 1.97,
          deg: 157,
          gust: 3.39,
        },
        visibility: 10000,
        pop: 0.33,
        rain: {
          "3h": 0.57,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-08-30 18:00:00",
      },
      {
        dt: 1661893200,
        main: {
          temp: 292.46,
          feels_like: 292.54,
          temp_min: 290.31,
          temp_max: 292.46,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 80,
          temp_kf: 2.15,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 68,
        },
        wind: {
          speed: 2.66,
          deg: 210,
          gust: 3.58,
        },
        visibility: 10000,
        pop: 0.7,
        rain: {
          "3h": 0.49,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-08-30 21:00:00",
      },
      {
        dt: 1662292800,
        main: {
          temp: 294.93,
          feels_like: 294.83,
          temp_min: 294.93,
          temp_max: 294.93,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 935,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 1.14,
          deg: 17,
          gust: 1.57,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-04 12:00:00",
      },
    ],
    city: {
      id: 3163858,
      name: "Zocca",
      coord: {
        lat: 44.34,
        lon: 10.99,
      },
      country: "IT",
      population: 4593,
      timezone: 7200,
      sunrise: 1661834187,
      sunset: 1661882248,
    },
  };

  const _forecasts = getForecast({
    lat: lat,
    lon: lon,
    cnt: 10,
    units: "metric",
  });
  useEffect(() => {}, []);
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      {/* <LineChart
        height={300}
        data={forecasts.list}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 3" />
        <XAxis dataKey="dt" stroke="#fff" />
        <YAxis dataKey="main.temp" stroke="#fff" />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="main.temp"
          stroke="#fff"
          activeDot={{ r: 8 }}
        />
      </LineChart> */}
      <AreaChart
        // width={730}
        height={250}
        data={forecasts.list}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTempMax" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="dt" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="main.temp_min"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorTemp)"
        />
        <Area
          type="monotone"
          dataKey="main.temp_max"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorTempMax)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Forecast;
