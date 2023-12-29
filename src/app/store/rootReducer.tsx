
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter.slice';
import cakeSlice from '../features/cake/cake.slice';
import userSlice from '../features/user/user.slice';


function parentPath(url: string) {
  return url.split('/').slice(-2).join('/');
}

//async function smartReducers() {

// let reducers: { [k: string]: any; } = {};
const context = require.context('./../features/', true, /\.slice\.tsx$/);
const reducers = context.keys().reduce((acc: any, key) => {
  const reducerName = key.replace(/\.\/.js/g, '');
  acc[reducerName] = context(key).default;
  return acc;
}, {});
//const modulePaths = context.keys();
// modulePaths.forEach(async (modulePath) => {
//   const a = modulePath.slice(1);
//   const b = `${'./../features'}${modulePath.slice(1)}`;
//   const loadLibrary: any = async () => await import(`${'./../features'}${modulePath.slice(1)}`);
//   console.log(loadLibrary);
//   const reducerName = parentPath(modulePath);
//   reducers[reducerName] = loadLibrary.default;
// });
//   return reducers;
// }

// const reducers: any = smartReducers();
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
