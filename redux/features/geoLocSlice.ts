import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Coords = Pick<
  GeolocationPosition["coords"],
  "latitude" | "longitude"
>;

type InitialStateType = {
  value: Coords | null;
};

const initialState: InitialStateType = {
  value: null,
};

export const geoLocationSlice = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {
    setCoords: (
      state,
      action: PayloadAction<NonNullable<InitialStateType["value"]>>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setCoords } = geoLocationSlice.actions;
export default geoLocationSlice.reducer;
