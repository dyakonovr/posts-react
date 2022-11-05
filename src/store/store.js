import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './postsReducer';
import { usersReducer } from './usersReducer';

const reducer = { posts: postsReducer, users: usersReducer };

export const store = configureStore({ reducer });