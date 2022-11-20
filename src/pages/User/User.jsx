import Header from "../../components/User/Header/Header";
import { useSelector } from "react-redux/es/exports";
import Preloader from "../../components/universal/Preloader/Preloader";

const User = () => {
  const dataIsLoaded = useSelector(store => store.users.dataIsLoaded);

  if (dataIsLoaded) {
    return (
      <>
        <Header />
        <h1 className={classes.title}>Посты пользователя</h1>
      </>
    );
  } else {
    return <Preloader />
  }
};

export default User;