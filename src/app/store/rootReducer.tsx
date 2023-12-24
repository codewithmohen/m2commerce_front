
import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD:src/app/store.tsx
import counterReducer from './features/counter/counterSlice'
import cakeSlice from './features/cake/cakeSlice'
import userSlice from './features/user/userSlice'
=======
import counterReducer from './../features/counter/slice'
>>>>>>> 64792c163fc8cd7fc32feaf25a1b6d6cf3dfb74a:src/app/store/rootReducer.tsx
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cake: cakeSlice,
        user:userSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch