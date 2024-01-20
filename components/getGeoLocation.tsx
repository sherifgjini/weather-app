"use client";
import { getCoords } from "@/redux/features/geoLocSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

const GetGeoLocation = () => {
  const dispatch = useDispatch<AppDispatch>();
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) =>
      dispatch(
        getCoords({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        })
      )
    );
  } else {
    console.log("geo location not supported");
  }

  return null;
};

export default GetGeoLocation;
