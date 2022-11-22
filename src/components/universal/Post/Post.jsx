import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ post, user }) => {
  return (
    <li className={classes.item} data-post-id={post.id} data-user-id={user.id}>
      <div >
        <div className={classes.header}>
          <Link to={`/user/?id=${user.id}&page=1`} className={classes.wrapper}>
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