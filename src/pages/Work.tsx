import React from "react";
import Experience from "../sections/Experience";

const Work: React.FC = () => {
  return (
    <>
      <h2>Work</h2>
      <p>
        A streamlined view of my <strong>professional experience</strong> (as
        seen on{" "}
        <a href="https://www.linkedin.com/in/fer-nando-machado/details/experience/">
          LinkedIn
        </a>
        ).
        <Experience />
      </p>
    </>
  );
};

export default Work;
