import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Home" />
        <meta name="description" content="Home - description" />
        <title>Home</title>
      </Helmet>
      <div>
        <a href="/jobs">Jobs</a>
      </div>
      <div>
        <a href="/about">About</a>
      </div>
    </div>
  );
}

export default Home;
