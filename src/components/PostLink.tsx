import React from 'react';
import Link from 'next/link';

interface PostLinkProps {
  title: string;
}

const PostLink: React.FC<PostLinkProps> = ({ title }) => (
  <li>
    <Link
      href={{
        pathname: 'post',
        query: {
          title,
        },
      }}
    >
      <a>{title}</a>
    </Link>
  </li>
);

export default PostLink;
