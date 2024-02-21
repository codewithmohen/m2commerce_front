import { Middleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer, persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
const context = require.context('./', true, /\.slice\.ts$/i);
const reducers = context.keys().reduce((acc: any, key) => {
  const reducerNamePattern = /([^\/]+)$/;
  const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
  acc[reducerName] = context(key).default;
  return acc;
}, {});
const combinedReducers = combineReducers(reducers);
const myMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Current state: ', store.getState().auth);
  return next(action);
};

export const store = configureStore({
  reducer: persistReducer(
    {
      // timeout: 500,
      key: 'root',
      storage,
      whitelist: ['auth']
    },
    combinedReducers
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  // immutableCheck: false,
  // serializableCheck: false,
  // thunk: true
  // }
  // ).concat(logger).concat(thunk)
});

export type RootStateType = ReturnType<typeof store.getState>;
// export type RootState = store.getState;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

// store.subscribe(() => console.log("Error: ", store.getState().auth.error.message));