import { SET_POSTS_DATA, SET_POSTS_ERROR, SET_POSTS_PER_PAGE } from './actions';

const defaultState = {
  data: [],
  dataIsLoaded: false,
  error: "",
  postsPerPage: 0
}


// Сам редьюсер
export const postsReducer = (state = defaultState, action) => {
  const { data, error, postsPerPage } = action;

  switch (action.type) {
    case SET_POSTS_DATA:
      return { ...state, data, dataIsLoaded: true };
    case SET_POSTS_ERROR:
      return { ...state, error };
    case SET_POSTS_PER_PAGE:
      // let filteredPostsArray = createPostsListByPages(state.data, postsPerPage);
      console.log({ ...state, postsPerPage });
      return { ...state, postsPerPage }
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


// Вспомогательные функции

function createPostsListByPages(data, postsPerPage) {
  // Обрабатываю массив постов (разбиваю его на постраничные массивы)

  // Создаю вспомогательный массив
  let postsByPages = [];

  // Если кол-во постов, деленных на collectionsOnPage >, чем одна == страниц больше, чем одна
  if (data.length / postsPerPage > 1) {
    // Перебираю весь массив
    for (let i = 0; i < data.length; i++) {
      // Если пост должен быть на след. странице
      if ((i / postsPerPage) === Math.ceil(i / postsPerPage)) {
        // Создаём новую страницу и добавляем его туда
        postsByPages.push([data[i]]);
      }
      // Иначе
      else {
        // Добавляем его в массив конкретной страницы
        postsByPages[postsByPages.length - 1].push(data[i]);
      }
    }

    return postsByPages;
  } else { // Если страница только одна
    return [data];
  }

  // Обрабатываю массив постов (разбиваю его на постраничные массивы) END
}