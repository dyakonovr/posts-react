import PostsHeader from '../PostsHeader/PostsHeader';
import PostsList from '../PostsList/PostsList';

const Posts = ({ title, users, posts }) => {
  return (
    <>
      <PostsHeader title={title} />
      <PostsList posts={posts} users={users} />
    </>
  );
};

export default Posts;