import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './converter/converterSlice';

export const store = configureStore({
    reducer: {
        converter: converterReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
