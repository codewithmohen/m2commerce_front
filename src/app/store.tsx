import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer, persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const context = require.context('./', true, /\.slice\.ts$/i);
const reducers = context.keys().reduce((acc: any, key) => {
  const reducerNamePattern = /([^\/]+)$/;
  const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
  acc[reducerName] = context(key).default;
  return acc;
}, {});

const combinedReducers = combineReducers(reducers);
// const combinedReducers = combineReducers({ authSlice });
// export const store = configureStore({
//   reducer: combinedReducers
// });
export const store = configureStore({
  reducer: persistReducer(
    {
      timeout: 500,
      key: 'root',
      storage
    },
    combinedReducers
  ),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    })
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);