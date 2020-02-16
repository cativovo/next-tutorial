import React from 'react';
import Link from 'next/link';

interface PostLinkProps {
  id: string;
}

const PostLink: React.FC<PostLinkProps> = ({ id }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

export default PostLink;
