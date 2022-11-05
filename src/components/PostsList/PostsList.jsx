import PostsItems from '../UI/PostsItems/PostsItems';
import classes from './PostsList.module.css';

const PostsList = () => {
  return (
    <ul className={classes.list}>
      <PostsItems />
    </ul>
  );
};

export default PostsList;