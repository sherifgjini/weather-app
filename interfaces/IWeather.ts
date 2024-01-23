export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export type IWeatherParams = {
  lat: number;
  lon: number;
  /**
   * Response format.
   * @param xml Returns response as xml
   * @param html Returns response as html
   */
  mode?: "xml" | "html";
  /**
   * Units of measurement.
   * @param imperial For temperature in Fahrenheit use units=imperial
   * @param metric For temperature in Celsius use units=metric
   */
  units?: "imperial" | "metric";
  lang?: string;
  /**
   * A number of timestamps, which will be returned in the API response. This is used for forecast API
   */
  cnt?: number;
};
