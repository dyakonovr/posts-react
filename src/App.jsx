import { useEffect } from 'react';
import { Provider } from 'react-redux';
import PostsList from './components/PostsList/PostsList';
import './style/App.css';
import { store } from './store/store';
import { setPostsData, setPostsError } from './store/postsReducer';
import { setUsersData, setUsersError } from './store/usersReducer';

function App() {
  // Получаю все фотографии в виде .JSON и передаю их в store
  useEffect(() => {
    const url = 'https://6341ca7920f1f9d79979deb0.mockapi.io/react_posts';

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          store.dispatch(setPostsData(result[0].posts)); // Добавляю посты в store
          store.dispatch(setUsersData(result[0].users)); // Добавляю список пользователей в store
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
        <h1 className='title'>Посты</h1>
        <PostsList />
      </div>
    </Provider>

  )
}

export default App
