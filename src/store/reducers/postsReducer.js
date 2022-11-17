import { SET_POSTS_DATA, SET_POSTS_ERROR, SET_POSTS_PER_PAGE, SHOW_ALL_POSTS } from '../actions';

const defaultState = {
  data: [],
  dataIsLoaded: false,
  error: "",
  postsPerPage: 0, // [дефолтное_значение, изменяемое значение]
  showAllPosts: false,
}


// Сам редьюсер
export const postsReducer = (state = defaultState, action) => {
  const { data, error, postsPerPage, showAllPosts } = action;

  switch (action.type) {
    case SET_POSTS_DATA:
      return { ...state, data, dataIsLoaded: true };
    case SET_POSTS_ERROR:
      return { ...state, error };
    case SET_POSTS_PER_PAGE:
      return { ...state, postsPerPage }
    case SHOW_ALL_POSTS:
      return { ...state, showAllPosts }
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

export function setPostsPerPage(postsPerPage) {
  return { type: SET_POSTS_PER_PAGE, postsPerPage }
}

export function toggleAllPosts(value) {
  return { type: SHOW_ALL_POSTS, showAllPosts: value }
}
