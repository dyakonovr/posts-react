import { useEffect } from 'react';
import { Provider } from 'react-redux';
import './style/App.css';
import { store } from './store/store';
import { setPostsData, setPostsError, setPostsPerPage } from './store/reducers/postsReducer';
import { setUsersData, setUsersError } from './store/reducers/usersReducer';
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

          store.dispatch(setPostsPerPage(postsPerPage)); // Добавляю список пользователей в store
          store.dispatch(setPostsData(posts)); // Добавляю посты в store
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
  );
}

export default App
