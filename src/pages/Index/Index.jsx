import Posts from '../../components/universal/Posts/Posts';
import { useSelector } from 'react-redux'
import Preloader from '../../components/universal/Preloader/Preloader';
import AnimatedPage from "../../components/universal/AnimatedPage/AnimatedPage";

const Index = () => {
  const usersIsLoaded = useSelector(state => state.users.dataIsLoaded);
  const postsIsLoaded = useSelector(state => state.posts.dataIsLoaded);

  const users = useSelector(state => state.users.data);
  const posts = useSelector(state => state.posts.data);

  if (usersIsLoaded && postsIsLoaded) {
    return (
      <AnimatedPage>
        <Posts title={"Посты"} posts={posts} users={users} />
      </AnimatedPage>
    );
  } else {
    return <Preloader />
  }

};

export default Index;