// Полезные штуки
import { useSelector } from 'react-redux'
import useCustomSearchParams from '../../../hooks/useCustomSearchParams';
// Компоненты
import Post from '../Post/Post';
import Pagination from '../UI/Pagination/Pagination';
import Preloader from "../Preloader/Preloader";
// Классы
import classes from './PostsList.module.css';

const PostsList = ({ posts, users }) => {
  let numbersOfPages = null;
  const postsPerPage = useSelector(state => state.renderParams.postsPerPage);
  const showAllPosts = useSelector(state => state.renderParams.showAllPosts); // Параметр, к-ый показывает, нужно ли показывать все посты на одной странице (true) или показывать их по страницам (false)
  // Статус загрузки данных
  const postsIsLoaded = useSelector(state => state.posts.dataIsLoaded);
  const usersIsLoaded = useSelector(state => state.users.dataIsLoaded);
  // Получение текущей страницы
  const { currentSearchParams } = useCustomSearchParams();
  const page = Number(currentSearchParams.page);

  // Функции
  function createFilteredPostsLists(posts, postsPerPage) {
    // Обрабатываю массив постов (разбиваю его на постраничные массивы)

    // Создаю вспомогательный массив
    let postsByPages = [];

    // Если кол-во постов, деленных на collectionsOnPage >, чем одна == страниц больше, чем одна
    if (posts.length / postsPerPage > 1) {
      // Перебираю весь массив
      for (let i = 0; i < posts.length; i++) {
        // Если пост должен быть на след. странице
        if ((i / postsPerPage) === Math.ceil(i / postsPerPage)) {
          // Создаём новую страницу и добавляем его туда
          postsByPages.push([posts[i]]);
        }
        // Иначе
        else {
          // Добавляем его в массив конкретной страницы
          postsByPages[postsByPages.length - 1].push(posts[i]);
        }
      }

    } else { // Если страница только одна
      postsByPages = [posts];
    }

    return postsByPages;
    // Обрабатываю массив постов (разбиваю его на постраничные массивы) END
  }

  function createPostsList(posts, showAllPosts, page) {
    let postsList = [];
    let array = [];
    page = Number(page);

    if (showAllPosts) { // Если мы показываем все посты
      array = posts; // То рендерим необработанный массив
      numbersOfPages = 0; // И кол-во страниц выставляем на 0, чтобы <Pagination /> не рендерился
    }
    else {
      array = createFilteredPostsLists(posts, postsPerPage); // Получаем фильтрованный массив
      numbersOfPages = array.length; // Устанавливаем кол-во страниц
      array = array[page - 1]; // Работаем с текущей страницей
    }

    for (let i = 0; i < array.length; i++) {
      const post = array[i];
      const userID = post.userId;
      postsList.push(<Post key={post.id} post={post} user={users[userID - 1]} />);
    }

    return postsList;
  }
  // Функции END


  if (postsIsLoaded && usersIsLoaded) {
    return (
      <>
        <ul className={classes.list}>
          {createPostsList(posts, showAllPosts, page)}
        </ul>
        {
          numbersOfPages > 1 // Если страниц больше, чем одна
            ? // Рисуем пагинацию
            <Pagination numbersOfPages={numbersOfPages} page={page} />
            : // Иначе не рисуем ничего
            false
        }
      </>
    );
  } else {
    return (<Preloader />)
  }
};

export default PostsList;