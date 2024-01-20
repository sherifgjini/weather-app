import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  value: {
    username: string;
    isAuth: boolean;
    uuid: number;
  };
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uuid: 0,
  },
} as initialStateType;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    logIn: (_, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uuid: 123535,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
