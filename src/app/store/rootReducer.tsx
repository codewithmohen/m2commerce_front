
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counter.slice';
// import cakeSlice from '../features/cake/cake.slice';
// import userSlice from '../features/user/user.slice';

const context = require.context('./../features/', true, /\.slice\.tsx$/i);
const reducers = context.keys().reduce((acc: any, key) => {
  const reducerNamePattern = /([^\/]+)$/;
  const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
  acc[reducerName] = context(key).default;
  return acc;
}, {});

export const store = configureStore({
  reducer: combineReducers(reducers)
  // reducer: {
  //   counter: counterReducer,
  //   cake: cakeSlice,
  //   user: userSlice,
  // },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
