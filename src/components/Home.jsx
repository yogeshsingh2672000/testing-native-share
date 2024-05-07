import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/jobs">Jobs</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Home;
