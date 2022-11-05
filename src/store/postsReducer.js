import { SET_POSTS_DATA, SET_POSTS_ERROR } from './actions';

const defaultState = {
  posts: [],
  dataIsLoaded: false,
  error: "",
}

export const postsReducer = (state = defaultState, action) => {
  const { posts, error } = action;

  switch (action.type) {
    case SET_POSTS_DATA:
      return { ...state, posts, dataIsLoaded: true };
    case SET_POSTS_ERROR:
      return { ...state, error };
    default:
      return state
  }
};

export function setPostsData(posts) {
  return { type: SET_POSTS_DATA, posts }
}

export function setPostsError(error) {
  return { type: SET_POSTS_ERROR, error }
}