import React from 'react';
import Link from 'next/link';

interface PostLinkProps {
  id: string;
  name: string;
}

const PostLink: React.FC<PostLinkProps> = ({ id, name }) => (
  <li>
    <Link href="/show/[id]" as={`/show/${id}`}>
      <a>{name}</a>
    </Link>
  </li>
);

export default PostLink;
