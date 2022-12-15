import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import artworkReducer from './artwork';
import { apiSlice } from "./rtkQuery";

export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  artwork: artworkReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([apiSlice.middleware])
});

setupListeners(store.dispatch)
