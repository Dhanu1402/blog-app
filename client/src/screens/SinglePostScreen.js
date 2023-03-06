import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';

export default function SinglePostScreen() {
  const [postInfo, setPostInfo] = useState(null);

  // grab id of the post
  const { id } = useParams();

  // grab information for speccific post
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((respose) => {
      respose.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return '';

  return (
    <div className="post-page">
      <h1 className="text-center my-2.5 mx-0 mb-1.5">{postInfo.title}</h1>
      <time className="text-center block text-xs text-gray-400">
        {formatISO9075(new Date(postInfo.createdAt))}
      </time>
      <div className="text-center mb-5 font-xs font-bold">
        by @{postInfo.author.username}
      </div>
      <div className="max-h-72 flex overflow-hidden">
        <img
          className="object-cover object-center w-full"
          src={`http://localhost:4000/${postInfo.cover}`}
          alt=""
        />
      </div>
      <div
        className="leading-6"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
