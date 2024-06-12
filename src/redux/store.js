import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
  whitelist: ["favorites", "favoritesId"],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== "production",
});
export const persistor = persistStore(store);
