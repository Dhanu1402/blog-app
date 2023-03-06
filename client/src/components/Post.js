import React from 'react';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post gap-6 mb-10">
      <div>
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/' + cover} alt="" />
        </Link>
      </div>
      <div>
        <Link to={`/post/${_id}`}>
          <h2 className="text-3xl m-0">{title}</h2>
        </Link>
        <p className="flex gap-1 my-1.5 mx-0 text-gray-400 text-xs font-bold ">
          <Link to={''} className="text-black">
            {author.username}
          </Link>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="my-2.5 mx-0 leading-6">{summary}</p>
      </div>
    </div>
  );
}
