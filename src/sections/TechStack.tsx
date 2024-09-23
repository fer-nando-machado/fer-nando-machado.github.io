import React from "react";
import AssetFullStack from "../assets/fullstack.png";
import "./TechStack.css";

const TechStack: React.FC = () => {
  return (
    <section className="tech-stack">
      <img src={AssetFullStack} alt="full stack software developer" />
      <div>
        <h3>back-end</h3>
        <ul>
          <li>Node / Typescript</li>
          <li>Java</li>
          <li>Go</li>
          <li>microservices</li>
          <li>database design</li>
          <li>clean architecture</li>
        </ul>
      </div>
      <div>
        <h3>front-end</h3>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>HTML + CSS + JS</li>
          <li>UI design</li>
          <li>accessibility</li>
          <li>componentization</li>
        </ul>
      </div>
      <div>
        <h3>end-to-end</h3>
        <ul>
          <li>test driven development</li>
          <li>continuous integration</li>
          <li>continuous deployment</li>
          <li>developer experience</li>
          <li>observability</li>
          <li>clean code</li>
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
