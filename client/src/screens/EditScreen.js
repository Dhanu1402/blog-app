import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';

export default function EditScreen() {
  //grab id
  const { id } = useParams();

  const [title, setTitle] = useState('');

  const [summary, setSummary] = useState('');

  const [files, setFiles] = useState('');

  const [content, setContent] = useState('');

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // fetch information from specific post
    fetch('http://localhost:4000/post/' + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    // grab all the information from the state and create form data out of it
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    data.set('content', content);

    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      // send the cookie
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/post/' + id} />;
  }

  return (
    <form action="" onSubmit={updatePost}>
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
      <button className="mt-1.5">Update Post</button>
    </form>
  );
}
