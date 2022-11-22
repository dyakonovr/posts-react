// Классы
import classes from './Header.module.css';

const Header = ({ user, numbersOfPosts }) => {
  return (
    <div className={classes.header}>
      <div className={classes.avatar}>
        <img src={user.avatar} alt="" />
      </div>
      <div className={classes.info}>
        <strong className={classes.fullname}>{user.first_name} {user.last_name} (ID: {user.id})</strong>
        <span className={classes.email}>{user.email}</span>
      </div>
      <span className={classes.id}>Количество постов: {numbersOfPosts}</span>
    </div>
  );
};

export default Header;