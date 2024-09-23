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

      <p>
        On my free time, I love being in the nature, riding bikes, swimming in
        lakes, trying out a new recipe, vibing to a wild variety of music and
        playing videogames.{" "}
        <small title="Nintendo Friend Code">
          (Friend Code: 4419-5091-4908)🍄
        </small>
      </p>
      <p>Feel free to get in touch!</p>
      <Contacts />
    </>
  );
};

export default Connect;
