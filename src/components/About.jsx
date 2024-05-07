import React from "react";
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
        <a href="/">Home</a>
      </div>
    </div>
  );
}

export default About;
