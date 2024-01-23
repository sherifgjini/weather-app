import WeatherWrapper from "@/components/weatherBox/WeatherWrapper";
import WeatherBox from "@/components/weatherBox/weatherBox";
import { getCurrentWeather } from "@/services/getCurrentWeather.service";
import { Suspense } from "react";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
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
      <Suspense
        fallback={<span className="weatherBoxSkeleton">Loading...</span>}
      >
        <WeatherWrapper data={data}>
          <WeatherBox />
        </WeatherWrapper>
      </Suspense>
    </div>
  );
}
