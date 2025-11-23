import { configureStore } from "@reduxjs/toolkit";
import filesReducer from "./slices/filesSlice";

export const store = configureStore({
  reducer: {
    files: filesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for File objects
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
