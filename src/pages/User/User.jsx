import Header from "../../components/User/Header/Header";
import Posts from "../../components/universal/Posts/Posts";
import { useSelector } from "react-redux/es/exports";
import Preloader from "../../components/universal/Preloader/Preloader";
import createFilteredPostsByID from "../../functions/createFilteredPostsByID";
import useCustomSearchParams from "../../hooks/useCustomSearchParams";
import AnimatedPage from "../../components/universal/AnimatedPage/AnimatedPage";

const User = () => {
  const postsIsLoaded = useSelector(state => state.posts.dataIsLoaded);
  const usersIsLoaded = useSelector(state => state.users.dataIsLoaded);
  const postsPerPage = useSelector(state => state.renderParams.postsPerPage);

  let posts = useSelector(state => state.posts.data);
  posts = createFilteredPostsByID(posts, postsPerPage);

  const users = useSelector(state => state.users.data);
  const { currentSearchParams } = useCustomSearchParams();
  const userID = Number(currentSearchParams.id);

  if (postsIsLoaded && usersIsLoaded) {
    return (
      <AnimatedPage>
        <Header user={users[userID - 1]} />
        <Posts title={"Посты пользователя"} posts={posts[userID - 1]} users={users} />
      </AnimatedPage>
    );
  } else {
    return <Preloader />;
  }


};

export default User;