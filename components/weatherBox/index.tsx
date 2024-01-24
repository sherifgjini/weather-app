"use client";
import Styles from "./weatherBox.module.scss";
import SunInfo from "./sunInfo";
import MainInfo from "./mainInfo";
import TempInfo from "./tempInfo";
import CityInfo from "./cityInfo";
import { useAppSelector } from "@/redux/store";

const WeatherBox = () => {
  const { value } = useAppSelector((state) => state.weather);
  //we can pass data either by drilling value across components or from redux using useSelector()
  return (
    <div className={`${Styles.weatherbox} glass`} data-testid="weather-box">
      <CityInfo
        city={value.name}
        country={value.sys?.country}
        icon={value.weather?.[0]?.icon ?? ""}
        dt={value.dt}
        timezone={value.timezone}
      />
      <div className={Styles.tempInfo}>
        <TempInfo main={value.main} weather={value.weather} />
        <MainInfo {...value.main} />
      </div>
      <SunInfo {...value.sys} />
    </div>
  );
};

export default WeatherBox;
