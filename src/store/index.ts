import { shopsReducer } from "@/shops/slice/shopsSlice";
import { trucksReducer } from "@/trucks/slice/trucksSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    trucks: trucksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
