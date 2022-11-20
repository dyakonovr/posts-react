import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './reducers/postsReducer';
import { usersReducer } from './reducers/usersReducer';
import { renderParamsReducer } from "./reducers/renderParamsReducer";

const reducer = { posts: postsReducer, users: usersReducer, renderParams: renderParamsReducer };

export const store = configureStore({ reducer });