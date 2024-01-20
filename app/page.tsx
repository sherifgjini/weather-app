"use client";
import GetGeoLocation from "../components/getGeoLocation";
import Login from "./logIn";
import UserName from "./username";

// export const metadata = {
//   title: "App Router",
// };

const getCityWeather = async () => {
  const weatherData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}geo/1.0/direct?q=munich&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return weatherData.json();
};

const getGeoLocation = async () => {
  const weatherData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}geo/1.0/direct?q=munich&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return weatherData.json();
};

export default function Page() {
  const weatherData = getCityWeather();
  console.log(weatherData);
  return (
    <div>
      <img src={`${process.env.NEXT_PUBLIC_API_ICON_URL}/04n@4x.png`} alt="" />
      <Login />
      <UserName />
    </div>
  );
}
