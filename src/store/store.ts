import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";

const rootReducer = combineReducers({
  users: userSlice,
});

export default configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
