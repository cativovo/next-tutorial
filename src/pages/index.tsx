import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

export interface Show {
  id: string;
  name: string;
  summary: string;
  image?: {
    medium: string;
    original: string;
  };
}

interface IndexProps {
  shows: Show[];
}

const Index: NextPage<IndexProps> = ({ shows }) => (
  <Layout>
    <h1>Batman TV shows</h1>
    <ul>
      {shows.map(({ id, name }) => (
        <PostLink id={id} name={name} key={id} />
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  return {
    shows: data.map((entry: any) => entry.show),
  };
};

export default Index;
