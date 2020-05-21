import Header from '../../../components/header';
import { useRouter } from 'next/router';

// Title and Body come from the jsonplaceholder site, which has userId, id, title, and body in the response.
const Post = ({ title, body }) => {
  // Replaced by the getInitialProps hook
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Header />
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = response.json();
  return post;
};

export default Post;
