"use client";
import { setCoords } from "@/redux/features/geoLocSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GetGeoLocation = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) =>
        dispatch(
          setCoords({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          })
        )
      );
    } else {
      console.log("geo location not supported");
    }
  }, []);

  return null;
};

export default GetGeoLocation;
