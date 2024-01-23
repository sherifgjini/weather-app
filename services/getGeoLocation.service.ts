import { IGeoLocation } from "@/interfaces/IGeoLocation";

export const getGeoLocation = async (
  name: string,
  size?: number
): Promise<IGeoLocation[]> => {
  const data = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }geo/1.0/direct?q=${name}&limit=${(size = 10)}&appid=${
      process.env.NEXT_PUBLIC_API_KEY
    }`
  );
  return await data.json();
};
