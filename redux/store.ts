import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./features/authSlice";
import geoLocationReducer from "./features/geoLocSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authReducer,
      geoLocation: geoLocationReducer,
    },
  });
};

// shared types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
