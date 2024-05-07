import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Jobs() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Jobs" />
        <meta name="description" content="Jobs - description" />
        <title>Jobs</title>
      </Helmet>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Jobs;
