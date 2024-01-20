"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

const UserName = () => {
  const username = useAppSelector((state) => state.authReducer.value.username);
  // const { latitude, longitude } = useAppSelector((state) => {
  //   const geoLocationState = state.geoLocation.value;

  //   return geoLocationState
  //     ? {
  //         latitude: geoLocationState.latitude,
  //         longitude: geoLocationState.longitude,
  //       }
  //     : { latitude: 0, longitude: 0 };
  // });

  return <div>UserName: {username}</div>;
};

export default UserName;
