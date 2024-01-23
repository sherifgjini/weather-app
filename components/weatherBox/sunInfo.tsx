import Styles from "./weatherBox.module.scss";
import SunsetIcon from "@/public/icons/SunSet";
import SunriseIcon from "@/public/icons/SunRise";
import dayjs from "dayjs";
import { IWeather } from "@/interfaces/IWeather";

const SunInfo: React.FC<IWeather["sys"]> = ({ sunrise, sunset }) => {
  const sunsetT = dayjs.unix(sunset).format("HH:mm");
  const sunriseT = dayjs.unix(sunrise).format("HH:mm");
  return (
    <div className={Styles.suninfo}>
      <p>
        <SunriseIcon />
        Sunrise: {sunriseT}
      </p>
      <span>|</span>
      <p>
        <SunsetIcon />
        Sunset: {sunsetT}
      </p>
    </div>
  );
};

export default SunInfo;
