import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './reducers/postsReducer';
import { usersReducer } from './reducers/usersReducer';

const reducer = { posts: postsReducer, users: usersReducer };

export const store = configureStore({ reducer });