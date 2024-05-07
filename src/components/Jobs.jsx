import React from "react";
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
        <a href="/">Home</a>
      </div>
    </div>
  );
}

export default Jobs;
