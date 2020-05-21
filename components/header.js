import Link from 'next/link';

export default () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>

      <li>
        <Link as="/posts/1" href="/posts/[id]">
          <a>First Post</a>
        </Link>
      </li>

      <li>
        <Link as="/posts/2" href="/posts/[id]">
          <a>Second Post</a>
        </Link>
      </li>

      <li>
        <Link as="/posts/3" href="/posts/[id]">
          <a>Third Post</a>
        </Link>
      </li>
    </ul>
  );
};
