import React from 'react';

interface ContentProps {
  image?: string;
  name: string;
  summary: string;
}

const Content: React.FC<ContentProps> = ({ name, summary, image }) => (
  <>
    <h1>{name}</h1>
    <p>{summary}</p>
    {image && <img src={image} alt={name} />}
  </>
);

export default Content;
