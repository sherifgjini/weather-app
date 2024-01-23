import { IForecast } from "@/interfaces/IForecast";
import { IWeatherParams } from "@/interfaces/IWeather";

import { serialize } from "@/utils/serializeToQueryString";

export const getForecast = async (
  params: IWeatherParams
): Promise<IForecast> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}data/2.5/forecast${serialize(
      params
    )}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return await data.json();
};

//https://api.openweathermap.org/data/2.5/forecast?lat=42.5845754&lon=21.1314472&appid=7e922ed6ee20b63054d14ed30d615e3f
