import { useAppSelector } from "@/redux/store";
import WeatherIcon from "public/icons/Weather";
import React from "react";

const Header = () => {
  const { latitude, longitude } = useAppSelector((state) => {
    const geoLocationState = state.geoLocation.value;

    return geoLocationState
      ? {
          latitude: geoLocationState.latitude,
          longitude: geoLocationState.longitude,
        }
      : { latitude: 0, longitude: 0 };
  });
  return (
    <div>
      <WeatherIcon />
    </div>
  );
};

export default Header;
