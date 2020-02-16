import React from 'react';
import { useRouter } from 'next/router';

const Content: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default Content;
