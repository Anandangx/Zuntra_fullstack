import React from "react";

function PostCard({ post }) {

  return (

    <div className="card">

      <img
        src={post.image}
        alt={post.title}
      />

      <h3>{post.title}</h3>

    </div>
  );
}

export default PostCard;