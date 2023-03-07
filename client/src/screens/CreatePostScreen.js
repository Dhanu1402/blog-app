import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';
import { Helmet } from 'react-helmet-async';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');

  const [summary, setSummary] = useState('');

  const [files, setFiles] = useState('');

  const [content, setContent] = useState('');

  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('file', files[0]);
    data.set('content', content);

    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <Helmet>
        <title>Create Post</title>
      </Helmet>
      <form action="" onSubmit={createNewPost}>
        <input
          type="title"
          placeholder={'Title'}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder={'Summary'}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
        <Editor value={content} onChange={setContent} />
        <button className="mt-1.5">Create Post</button>
      </form>
    </div>
  );
}
