import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NoPage() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="404" />
        <meta name="description" content="404 - description" />
        <title>404</title>
      </Helmet>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
}

export default NoPage;
