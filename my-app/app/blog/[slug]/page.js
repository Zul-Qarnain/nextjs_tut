"use client"; // This must be at the top

import { useParams} from 'next/navigation';

const Post = () => {
  const params = useParams(); // Gets the dynamic route params
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  );
}

export default Post;
