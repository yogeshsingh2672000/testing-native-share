import React from "react";
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
        <a href="/home">Home</a>
      </div>
    </div>
  );
}

export default NoPage;
