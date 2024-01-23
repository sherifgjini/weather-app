import { serialize } from "@/utils/serializeToQueryString";
import { IWeather, IWeatherParams } from "@/interfaces/IWeather";

export const getCurrentWeather = async (
  params: IWeatherParams
): Promise<IWeather> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}data/2.5/weather${serialize(
      params
    )}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    { cache: "no-store" }
  );
  return await data.json();
};
