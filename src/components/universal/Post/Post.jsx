// Полезные штуки
import { Link } from 'react-router-dom';
// Функции
import scrollToTop from '../../../functions/scrollToTop';
// Классы
import classes from './Post.module.css';

const Post = ({ post, user }) => {
  const pathToUserPage = `/user/?id=${user.id}&page=1`;

  return (
    <li className={classes.item} data-post-id={post.id} data-user-id={user.id}>
      <div >
        <div className={classes.header}>
          <Link to={pathToUserPage} className={classes.wrapper} onClick={scrollToTop}>
            <div className={classes.avatar}>
              <img src={user.avatar} alt='Аватар' />
            </div>
            <strong className={classes.name}>{user.first_name} {user.last_name}</strong>
            <span className={classes.email}>({user.email})</span>
          </Link>
        </div>
        <div className={classes.footer}>
          <p className={classes.text}>{post.title}</p>
        </div>
      </div>
    </li>
  );
};

export default Post;