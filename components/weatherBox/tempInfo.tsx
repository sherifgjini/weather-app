import { IWeather } from "@/interfaces/IWeather";
import React from "react";

interface ITempInfoProps {
  weather: IWeather["weather"];
  main: IWeather["main"];
}

const TempInfo: React.FC<ITempInfoProps> = ({ main, weather }) => {
  const { description, main: title } = weather?.[0] ?? {
    description: "",
    main: "",
  };

  return (
    <div>
      <p>
        <b data-testid="main-temp">{Math.round(main?.temp)}°C</b>
      </p>
      <p>
        <b data-testid="main-title">{title}</b>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default TempInfo;
