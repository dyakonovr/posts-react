import Posts from '../../components/universal/Posts/Posts';
import { useSelector } from 'react-redux'

const Index = () => {
  const users = useSelector(state => state.users.data);
  const posts = useSelector(state => state.posts.data);

  return (<Posts title={"Посты"} posts={posts} users={users} />);
};

export default Index;