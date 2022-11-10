import PostsList from "./components/PostsList/PostsList";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Preloader from "../components/Preloader/Preloader";
import { useSelector } from 'react-redux'

const Index = () => {
  const dataIsLoaded = useSelector(store => store.posts.dataIsLoaded);

  return (
    <>
      <h1 className='title'>Посты</h1>
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