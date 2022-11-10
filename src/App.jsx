import { useEffect } from 'react';
import { Provider } from 'react-redux';
import './style/App.css';
import { store } from './store/store';
import { setPostsData, setPostsError, setPostsPerPage } from './store/postsReducer';
import { setUsersData, setUsersError } from './store/usersReducer';
import Pages from './pages/Pages';

function App() {
  // Получаю все фотографии в виде .JSON и передаю их в store
  useEffect(() => {
    const url = 'https://6341ca7920f1f9d79979deb0.mockapi.io/react_posts';

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          const { postsPerPage, posts, users } = result[0];

          // Обрабатываю массив постов (разбиваю его на постраничные массивы)

          // Создаю вспомогательный массив
          let postsByPages = [];

          // Если кол-во постов, деленных на collectionsOnPage >, чем одна == страниц больше, чем одна
          if (posts.length / postsPerPage > 1) {
            // Перебираю весь массив
            for (let i = 0; i < posts.length; i++) {
              // Если пост должен быть на след. странице
              if ((i / postsPerPage) === Math.ceil(i / postsPerPage)) {
                // Создаём новую страницу и добавляем его туда
                postsByPages.push([posts[i]]);
              }
              // Иначе
              else {
                // Добавляем его в массив конкретной страницы
                postsByPages[postsByPages.length - 1].push(posts[i]);
              }
            }

          } else { // Если страница только одна
            postsByPages = [posts];
          }

          // Обрабатываю массив постов (разбиваю его на постраничные массивы) END

          store.dispatch(setPostsPerPage(postsPerPage)); // Добавляю список пользователей в store
          store.dispatch(setPostsData(postsByPages)); // Добавляю посты в store
          store.dispatch(setUsersData(users)); // Добавляю список пользователей в store
        },
        (error) => {
          // Если произашла ошибка, то передаю её в store
          store.dispatch(setPostsError(error));
          store.dispatch(setUsersError(error));
        }
      )
  });
  // Получаю все фотографии в виде .JSON и передаю их в store END

  return (
    <Provider store={store}>
      <div className="App">
        <Pages />
      </div>
    </Provider>
  )
}

export default App
