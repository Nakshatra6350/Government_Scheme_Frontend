import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authslice";
import { apiSlice } from "./slices/apislice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
  },
  // preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
