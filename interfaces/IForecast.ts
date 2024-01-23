export interface IForecast {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

interface List {
  dt: number;
  main: Main;
  pop: number;
  dt_txt: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface City {
  id: number;
  name: string;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
