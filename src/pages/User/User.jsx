import Header from "../../components/User/Header/Header";
import Posts from "../../components/universal/Posts/Posts";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import Preloader from "../../components/universal/Preloader/Preloader";
import createFilteredPostsByID from "../../functions/createFilteredPostsByID";
import useCustomSearchParams from "../../hooks/useCustomSearchParams";
import AnimatedPage from "../../components/universal/AnimatedPage/AnimatedPage";
import classes from "./User.module.css";
import { withErrorBoundary } from "react-error-boundary";
import ErrorPage from "../ErrorPage/ErrorPage";

const User = () => {
  const postsIsLoaded = useSelector(state => state.posts.dataIsLoaded);
  const usersIsLoaded = useSelector(state => state.users.dataIsLoaded);
  const postsPerPage = useSelector(state => state.renderParams.postsPerPage);

  let posts = useSelector(state => state.posts.data);
  posts = createFilteredPostsByID(posts, postsPerPage);

  const users = useSelector(state => state.users.data);
  const { currentSearchParams } = useCustomSearchParams();
  const userID = Number(currentSearchParams.id);

  const userPosts = posts[userID - 1];

  if (postsIsLoaded && usersIsLoaded) {
    return (
      <AnimatedPage>
        <Link to={"/"} className={[classes.link, "link-w-underline"].join(' ')}>&larr; Вернуться на страницу всех постов</Link>
        <Header user={users[userID - 1]} numbersOfPosts={userPosts.length} />
        <Posts title={"Посты пользователя"} posts={userPosts} users={users} />
      </AnimatedPage>
    );
  } else {
    return <Preloader />;
  }


};

export default withErrorBoundary(User, {
  fallback: <ErrorPage />
});