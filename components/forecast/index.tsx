"use client";
import { IForecast } from "@/interfaces/IForecast";
import { Coords } from "@/redux/features/geoLocSlice";
import { getForecast } from "@/services/getForecast.service";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
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
  coords: Coords | null;
}
const Forecast: React.FC<ForecastProps> = ({ coords }) => {
  const [fc, setFc] = useState<IForecast>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (coords) {
      setLoading(true);
      getForecast({
        lat: coords.latitude,
        lon: coords.longitude,
        cnt: 5,
        units: "metric",
      })
        .then((res) => setFc(res))
        .catch(() => setError("Something went wrong!"))
        .finally(() => setLoading(false));
    }
  }, [coords]);

  const forecast = fc?.list.map((f) => ({
    dt: dayjs(f.dt_txt).format("HH:mm"),
    temp_min: f.main.temp_min,
    temp_max: f.main.temp_max,
  }));

  if (error) {
    return (
      <span
        className="boxSkeleton"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        Error trying to get forecast: {error}
      </span>
    );
  }

  return (
    <div className="chart">
      <p>Hourly forecast</p>
      <ResponsiveContainer height={300} width="100%">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AreaChart height={250} data={forecast}>
            <defs>
              <linearGradient id="colorTempMin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTempMax" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="dt" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid strokeDasharray="0 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="temp_min"
              name="Min temperature"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorTempMin)"
            />
            <Area
              type="monotone"
              dataKey="temp_max"
              name="Max temeperature"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorTempMax)"
            />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Forecast;
