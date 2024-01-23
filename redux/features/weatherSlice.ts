import { IWeather } from "@/interfaces/IWeather";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  value: IWeather;
  loading: boolean;
  error: string | null;
};

const initialState: InitialStateType = {
  loading: true,
  value: {} as IWeather,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (
      state,
      action: PayloadAction<NonNullable<InitialStateType["value"]>>
    ) => {
      state.value = action.payload;
      state.loading = false;
    },
    setError: (state, action: PayloadAction<InitialStateType["error"]>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<InitialStateType["loading"]>) => {
      state.loading = action.payload;
    },
  },
});

export const { setWeather, setError, setLoading } = weatherSlice.actions;
export default weatherSlice.reducer;
