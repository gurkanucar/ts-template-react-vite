import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Auth {
  isLoggedIn: boolean;
  token: string;
}

const initialState: Auth = {
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
