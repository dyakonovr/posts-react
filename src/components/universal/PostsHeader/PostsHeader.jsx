import classes from './PostsHeader.module.css';
import CustomSelect from '../UI/CustomSelect/CustomSelect';

const PostsHeader = ({ title }) => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <CustomSelect />
    </div>
  );
};

export default PostsHeader;