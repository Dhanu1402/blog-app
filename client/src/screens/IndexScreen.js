import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import { Helmet } from 'react-helmet-async';

export default function IndexScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div>
      {' '}
      <Helmet>
        <title>BloggingAdda</title>
      </Helmet>
      {posts.length > 0 && posts.map((post) => <Post {...post} />)}
    </div>
  );
}
