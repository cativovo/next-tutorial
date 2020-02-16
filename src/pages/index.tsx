import React from 'react';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Index: React.FC = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
