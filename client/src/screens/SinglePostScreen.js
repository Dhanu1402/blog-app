import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import { UserContext } from '../components/UserContext';
import { Helmet } from 'react-helmet-async';

export default function SinglePostScreen() {
  const [postInfo, setPostInfo] = useState(null);

  const { userInfo } = useContext(UserContext);

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
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <h1 className="text-center my-2.5 mx-0 mb-1.5">{postInfo.title}</h1>
      <time className="text-center block text-xs text-gray-400">
        {formatISO9075(new Date(postInfo.createdAt))}
      </time>
      <div className="text-center mb-5 font-xs font-bold">
        by @{postInfo.author.username}
      </div>
      {userInfo.id === postInfo.author._id && (
        <div className="text-center mb-5">
          <Link
            to={`/edit/${postInfo._id}`}
            className="bg-gray-500 inline-flex items-center gap-1.5 text-white py-4 px-8 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit this post
          </Link>
        </div>
      )}
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
