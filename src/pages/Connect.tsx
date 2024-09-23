import React from "react";
import Blog from "../sections/Blog";
import Contacts from "../sections/Contacts";

const Connect: React.FC = () => {
  return (
    <>
      <h2>Connect</h2>
      <p>
        Read my latest article on the{" "}
        <a href="https://dev.to/fernandomachado">DEV Community</a>:
      </p>
      <Blog />
      <p>Feel free to drop a message!</p>
      <Contacts />
    </>
  );
};

export default Connect;
