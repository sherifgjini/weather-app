"use client";
import { useAppSelector } from "@/redux/store";
import WeatherIcon from "public/icons/Weather";
import Styles from "./header.module.scss";
import Input from "../input";
import Search from "./search";
import Login from "./signin";

const Header = () => {
  // const { latitude, longitude } = useAppSelector((state) => {
  //   const geoLocationState = state.geoLocation.value;

  //   return geoLocationState
  //     ? {
  //         latitude: geoLocationState.latitude,
  //         longitude: geoLocationState.longitude,
  //       }
  //     : { latitude: 0, longitude: 0 };
  // });
  return (
    <header className={Styles.header}>
      <div>
        <WeatherIcon />
        <p>Weather app</p>
      </div>
      <Search />
      <Login />
    </header>
  );
};

export default Header;
