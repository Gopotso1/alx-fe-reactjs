import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  let { id } = useParams();
  return <div>Blog Post ID: {id}</div>;
};

export default BlogPost;
