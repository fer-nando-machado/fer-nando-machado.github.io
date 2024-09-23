import React from "react";
import TechStack from "../sections/TechStack";
import { Link } from "react-router-dom";

const now = new Date().getFullYear();
const age = now - 1990;
const experience = now - 2007;

const Hello: React.FC = () => {
  return (
    <>
      <h2>Hello, World!</h2>
      <div className="split-bio">
        <p>
          My name is <strong>Fernando Machado</strong>. I am {age} years old and
          I live in{" "}
          <a href="https://maps.app.goo.gl/iETR6NFQmsKfKyyq5">
            Berlin, Germany
          </a>
          .
        </p>
        <p>
          I am a <strong>Full Stack Software Engineer</strong>, fluent on{" "}
          <strong>Agile</strong> development practices and with {experience}{" "}
          years of professional experience. Over the years, I have worked with a
          variety of programming languages and paradigms: from PHP to Java to Go
          to, more recently, a <strong>Typescript</strong> oriented tech stack
          with <strong>React</strong> and <strong>Node</strong>.
        </p>
        <p>
          I designed and colaborated on solutions for problems in different
          domains, such as: custom content management; weather and meteorology;
          road tool systems; health insurances, exam trackings and medical
          appointments; product warehouse allocation; education and e-learning;
          authorization and authentication; web browser automation and payments
          (alongside a passion for gamification).
        </p>
        <p>
          I love bringing people and technology together to shape ideas into
          solutions for real life problems . From inception to (continuous)
          deployment, I believe that open communication, interdisciplinary
          collaboration and iterative experimentation are the keys to the
          success of any project or team.
        </p>
        <p></p>
      </div>
      <h2>Tech Stack</h2>
      <TechStack />
      <p>
        I am a <strong>technologist</strong> first, and over the years my
        curiosity has taken me to different roles: from <strong>quality</strong>{" "}
        assurance strategies to getting involved in{" "}
        <strong>product design</strong> (facilitating inception and discovery
        sessions; drawing interface proposals, discussing business requirements
        with stakeholders and writing respective stories and acceptance criteria
        for them) and, also, in <strong>leadership</strong> (conducting
        plannings and retrospective meetings; handling onboarding and feedbacks
        and team norming sessions, always with continous improvement in mind).
        Read more <Link to="/work">here</Link>.
      </p>
    </>
  );
};

export default Hello;
