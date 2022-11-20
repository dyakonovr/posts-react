import classes from './Post.module.css';

const Post = ({ post, user }) => {
  return (
    <li className={classes.item} data-post-id={post.id} data-user-id={user.id}>
      <div className={classes.header}>
        <div className={classes.avatar}>
          <img src={user.avatar} alt='Аватар' />
        </div>
        <strong className={classes.name}>{user.first_name} {user.last_name}</strong>
        <span className={classes.email}>({user.email})</span>
      </div>
      <div className={classes.footer}>
        <p className={classes.text}>{post.title}</p>
      </div>
    </li>
  );
};

export default Post;