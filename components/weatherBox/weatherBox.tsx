import SunsetIcon from "@/public/icons/SunSet";
import SunriseIcon from "@/public/icons/SunRise";

const WeatherBox = () => {
  return (
    <div>
      <div>
        <p>Suterday, 20 January, 15:00</p>
        <h1>Munich, DE</h1>
      </div>
      <div>
        <div>
          <img
            src={`${process.env.NEXT_PUBLIC_API_ICON_URL}/04n@4x.png`}
            alt="weathericon"
          />
          <p>30°C</p>
        </div>
        <ul>
          <li>Real feel: 30</li>
          <li>Real feel: 30</li>
          <li>Real feel: 30</li>
        </ul>
      </div>
      <div>
        <p>
          <SunsetIcon />
          Sunset: 19:00{" "}
        </p>
        <p>
          <SunriseIcon />
          sunrise: 19:00{" "}
        </p>
      </div>
    </div>
  );
};

export default WeatherBox;
