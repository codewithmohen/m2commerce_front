import { combineReducers, configureStore } from '@reduxjs/toolkit';

const context = require.context('./', true, /\.slice\.tsx$/i);
const reducers = context.keys().reduce((acc: any, key) => {
  const reducerNamePattern = /([^\/]+)$/;
  const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
  acc[reducerName] = context(key).default;
  return acc;
}, {});

export const store = configureStore({
  reducer: combineReducers(reducers)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;