import classes from './Header.module.css';

const Header = ({ user }) => {
  return (
    <div className={classes.header}>
      <div className={classes.avatar}>
        <img src={user.avatar} alt="" />
      </div>
      <div className={classes.info}>
        <strong className={classes.fullname}>{user.first_name} {user.last_name}</strong>
        <span className={classes.email}>{user.email}</span>
      </div>
      <span className={classes.id}>ID пользователя: {user.id}</span>
    </div>
  );
};

export default Header;