import { IWeather } from "@/interfaces/IWeather";
import Styles from "./weatherBox.module.scss";

const MainInfo: React.FC<IWeather["main"]> = ({
  humidity,
  temp_max,
  temp_min,
  feels_like,
}) => {
  return (
    <ul>
      <li>Real feel: {feels_like}°C</li>
      <li>Humidity: {humidity}%</li>
      <li className={Styles.minmax}>
        <small>{temp_max}°</small>
        <span></span>
        <small>{temp_min}°</small>
      </li>
    </ul>
  );
};

export default MainInfo;
