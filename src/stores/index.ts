import { configureStore, combineReducers } from '@reduxjs/toolkit';
import artworkReducer from './artwork';

export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  artwork: artworkReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
});
