import dayjs from "dayjs";
import Styles from "./weatherBox.module.scss";
import { IWeather } from "@/interfaces/IWeather";
import { convertTzAndDt } from "@/utils/convertTzAndDt";
interface CityInfoProps {
  city: IWeather["name"];
  country: IWeather["sys"]["country"];
  icon: string;
  timezone: number;
  dt: number;
}
const CityInfo: React.FC<CityInfoProps> = ({
  city,
  country,
  icon,
  dt,
  timezone: tz,
}) => {
  return (
    <div className={Styles.cityname}>
      <div>
        {convertTzAndDt(dt, tz)}
        <h1>
          {city}, {country}
        </h1>
      </div>
      <img
        src={`${process.env.NEXT_PUBLIC_API_ICON_URL}/${icon}@4x.png`}
        alt="weathericon"
      />
    </div>
  );
};

export default CityInfo;
