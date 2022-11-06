import Post from '../Post/Post';
import classes from './PostsList.module.css';
import { useSelector } from 'react-redux'

const PostsList = () => {
  const posts = useSelector(state => state.posts.data); // Получаю массив постов
  const users = useSelector(state => state.users.data); // Получаю массив пользователей

  return (
    <ul className={classes.list}>
      {/* Перебираю посты и отрисовываю их */}
      {posts.map(post => {
        const userID = post.userId;
        return <Post key={post.id} post={post} user={users[userID - 1]} />
      })}
    </ul>
  );
};

export default PostsList;