"use client";
import Forecast from "@/components/forecast";
import {
  setError,
  setLoading,
  setWeather,
} from "@/redux/features/weatherSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { getCurrentWeather } from "@/services/getCurrentWeather.service";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const WeatherBox = dynamic(() => import("@/components/weatherBox"), {
  loading: () => <span className="boxSkeleton">Loading...</span>,
});

const Home = () => {
  const coords = useAppSelector((state) => state.geoLocation.value);
  const { value: data, loading } = useAppSelector((state) => state.weather);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (coords) {
      getCurrentWeather({
        lat: coords.latitude,
        lon: coords.longitude,
        units: "metric",
      })
        .then((res) => dispatch(setWeather(res)))
        .catch(() => setError("Something went wrong!"))
        .finally(() => setLoading(false));
    }
  }, [coords]);

  return (
    <div>
      {loading ? (
        <span className="boxSkeleton">Loading...</span>
      ) : data ? (
        <WeatherBox />
      ) : (
        <p>No weather data available</p>
      )}
      <Forecast coords={coords} />
    </div>
  );
};

export default Home;
