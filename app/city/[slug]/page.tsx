import Forecast from "@/components/forecast";
import WeatherWrapper from "@/components/weatherBox/WeatherWrapper";
import WeatherBox from "@/components/weatherBox";
import { getCurrentWeather } from "@/services/getCurrentWeather.service";
import { Suspense } from "react";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const latLon = params.slug.split("_");
  const city = await getCurrentWeather({ lat: +latLon[0], lon: +latLon[1] });
  return { title: `Weather in ${city.name}` };
}

export default async function Page({ params }: Params) {
  const latLon = params.slug.split("_");
  const data = await getCurrentWeather({
    lat: +latLon[0],
    lon: +latLon[1],
    units: "metric",
  });
  return (
    <div>
      <Suspense fallback={<span className="boxSkeleton">Loading...</span>}>
        <WeatherWrapper data={data}>
          <WeatherBox />
        </WeatherWrapper>
      </Suspense>
      <Forecast coords={{ latitude: +latLon[0], longitude: +latLon[1] }} />
    </div>
  );
}
