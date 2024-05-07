import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="About" />
        <meta name="description" content="About - description" />
        <title>About</title>
      </Helmet>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default About;
