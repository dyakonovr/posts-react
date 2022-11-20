import { SET_NUMBERS_OF_POSTS_PER_PAGE, SHOW_ALL_POSTS } from '../actions';

const defaultState = {
  postsPerPage: 0, // [дефолтное_значение, изменяемое значение]
  showAllPosts: false,
}


// Сам редьюсер
export const renderParamsReducer = (state = defaultState, action) => {
  const { postsPerPage, showAllPosts } = action;

  switch (action.type) {
    case SET_NUMBERS_OF_POSTS_PER_PAGE:
      return { ...state, postsPerPage };
    case SHOW_ALL_POSTS:
      return { ...state, showAllPosts };
    default:
      return state;
  }
};


// Action creators 
export function setPostsPerPage(postsPerPage) {
  return { type: SET_NUMBERS_OF_POSTS_PER_PAGE, postsPerPage }
}

export function toggleAllPosts(showAllPosts) {
  return { type: SHOW_ALL_POSTS, showAllPosts }
}