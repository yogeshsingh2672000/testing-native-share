import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Post() {
    const { postId } = useParams();
  return (
    <div>
    <Helmet>
      <meta property="og:title" content={`Post - ${postId}`} />
      <meta name="description" content={`Post - ${postId} - description`} />
      <title>Post</title>
    </Helmet>
    <div>{postId}</div>
    <div>
      <Link to="/">Home</Link>
    </div>
  </div>
  )
}

export default Post