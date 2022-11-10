import Post from '../Post/Post';
import classes from './PostsList.module.css';
import { useSelector } from 'react-redux'
import Pagination from '../UI/Pagination/Pagination';
import { useParams } from 'react-router-dom';

const PostsList = () => {
  const users = useSelector(state => state.users.data); // Получаю массив пользователей
  const posts = useSelector(state => state.posts.data); // Получаю массив постов
  const numbersOfPages = posts.length // Высчитываем кол-во страниц на сайте
  const { page } = useParams(); // Получаю текущую страницу

  // Функции
  function createPostsList(posts) {
    let postsList = [];

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const userID = post.userId;
      postsList.push(<Post key={post.id} post={post} user={users[userID - 1]} />);
    }

    return postsList;
  }
  // Функции END


  return (
    <>
      <ul className={classes.list}>
        {createPostsList(posts[page - 1])}
      </ul>
      {
        numbersOfPages > 1 // Если страниц больше, чем одна
          ? // Рисуем пагинацию
          <Pagination numbersOfPages={numbersOfPages} page={page} />
          : // Иначе не рисуем ничего
          false
      }
    </>
  );
};

export default PostsList;