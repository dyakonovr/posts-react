import PostsList from '../../components/Index/PostsList/PostsList';
import AnimatedPage from "../../components/universal/AnimatedPage/AnimatedPage";
import Preloader from '../../components/universal/Preloader/Preloader';
import CustomSelect from '../../components/Index/UI/CustomSelect/CustomSelect';
import { useSelector } from 'react-redux';
import classes from './Index.module.css';

const Index = () => {
  const dataIsLoaded = useSelector(store => store.posts.dataIsLoaded);

  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.title}>Посты</h1>
        <CustomSelect />
      </div>
      {dataIsLoaded
        ? // Если данные пришли - рисуем приложение
        <AnimatedPage>
          <PostsList />
        </AnimatedPage>
        : // Если данные ещё не приишли с сервера - отрисовываем прелоадер
        <Preloader />
      }
    </>
  );
};

export default Index;