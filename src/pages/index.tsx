import React from 'react';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Blog: React.FC = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" />
      <PostLink id="learn-nextjs" />
      <PostLink id="deploy-nextjs" />
    </ul>
  </Layout>
);

export default Blog;
