import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users';
import searchRecordsReducer from './features/searchRecords';
import notificationReducer from './features/notification';
const store = configureStore({
    reducer: {
        users: usersReducer,
        searchRecords: searchRecordsReducer,
        notification: notificationReducer
    }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;