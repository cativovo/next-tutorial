import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import React from 'react';
import { Show } from '..';
import Content from '../../components/Content';
import Layout from '../../components/Layout';

interface PostPage {
  show: Show;
}

const PostPage: NextPage<PostPage> = ({ show }) => (
  <Layout>
    <Content
      name={show.name}
      image={show.image?.medium}
      summary={show.summary}
    />
  </Layout>
);

PostPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  show.summary = show.summary.replace(/<[/]?[pb]>/g, '');

  return { show };
};

export default PostPage;
