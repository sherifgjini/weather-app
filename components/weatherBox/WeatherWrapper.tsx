"use client";
import { IWeather } from "@/interfaces/IWeather";
import { setWeather } from "@/redux/features/weatherSlice";
import { AppDispatch } from "@/redux/store";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";

const WeatherWrapper = ({
  children,
  data,
}: {
  children: ReactNode;
  data: IWeather;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setWeather(data));

  return <>{children}</>;
};

export default WeatherWrapper;
