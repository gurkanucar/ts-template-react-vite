import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import authSlice from "./auth/auth.slice";

const rootReducer = combineReducers({
  users: userSlice,
  auth: authSlice,
});

export default configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
