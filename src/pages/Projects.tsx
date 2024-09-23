import React from "react";
import { default as Section } from "../sections/Projects";

const Projects: React.FC = () => {
  return (
    <>
      <h2>Projects</h2>
      <p>
        A selection of my <strong>open-source</strong> projects also available
        at <a href="https://github.com/fer-nando-machado/">GitHub</a>.
      </p>
      <Section />
    </>
  );
};

export default Projects;
