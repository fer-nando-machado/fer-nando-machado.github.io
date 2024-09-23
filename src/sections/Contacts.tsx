import React from "react";
import "./Contacts.css";

const Contacts: React.FC = () => {
  return (
    <section className="contacts">
      <ul>
        <li>
          <a href="https://linkedin.com/in/fer-nando-machado/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/fer-nando-machado">GitHub</a>
        </li>
        <li>
          <a href="https://dev.to/fernandomachado">DEV Community</a>
        </li>
        <li>
          <a href="https://medium.com/@fernando-machado">Medium</a> (🇧🇷)
        </li>
        <li>
          <a href="mailto:lfmachado90@gmail.com">Email</a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
