import { SET_POSTS_DATA, SET_POSTS_ERROR, } from '../actions';

const defaultState = {
  data: [],
  dataIsLoaded: false,
  error: "",
}


// Сам редьюсер
export const postsReducer = (state = defaultState, action) => {
  const { data, error } = action;

  switch (action.type) {
    case SET_POSTS_DATA:
      return { ...state, data, dataIsLoaded: true };
    case SET_POSTS_ERROR:
      return { ...state, error };
    default:
      return state
  }
};


// Action creators 
export function setPostsData(data) {
  return { type: SET_POSTS_DATA, data }
}

export function setPostsError(error) {
  return { type: SET_POSTS_ERROR, error }
}