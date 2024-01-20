import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Coords = Pick<GeolocationPosition["coords"], "latitude" | "longitude">;

type InitialStateType = {
  value: Coords | null;
};

const initialState: InitialStateType = {
  value: {
    latitude: 0,
    longitude: 0,
  },
};

export const geoLocationSlice = createSlice({
  name: "getGeoLocation",
  initialState,
  reducers: {
    getCoords: (state, action: PayloadAction<Coords>) => {
      state.value = action.payload;
    },
  },
});

export const { getCoords } = geoLocationSlice.actions;
export default geoLocationSlice.reducer;
