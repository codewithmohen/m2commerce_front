import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import cakeSlice from "./features/cake/cakeSlice";
import userSlice from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cake: cakeSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
