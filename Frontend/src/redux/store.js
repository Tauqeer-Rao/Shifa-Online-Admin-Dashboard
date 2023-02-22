import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getAllApi } from "../redux/feature/doctor-crud/crud";
import { LoginApi } from "./feature/Admin-login/loginApi";
export const store = configureStore({
  reducer: {
    [getAllApi.reducerPath]: getAllApi.reducer,
    [LoginApi.reducerPath]: LoginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllApi.middleware, LoginApi.middleware),
});

setupListeners(store.dispatch);
