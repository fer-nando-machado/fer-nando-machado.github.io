import React from "react";
import AssetAceleradoraInclusiva from "../assets/aceleradora-inclusiva.png";
import AssetAuraSocial from "../assets/aura-social.png";
import AssetCodebook from "../assets/codebook.jfif";
import AssetCoinIdentifier from "../assets/coin-identifier.png";
import AssetDK3D from "../assets/DK3D.png";
import AssetDKRedux from "../assets/dk-redux.png";
import AssetEliza from "../assets/eliza.png";
import AssetGitHubPageMaker from "../assets/github-page-maker.png";
import AssetWiiStreetView from "../assets/wii-street-view.jpg";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div>
        <a href="https://fer-nando-machado.github.io/aceleradora-inclusiva/">
          <h3>Aceleradora Inclusiva</h3>
          <img src={AssetAceleradoraInclusiva} />
        </a>
        <p>
          During my time at Thoughtworks, I was part of{" "}
          <a href="https://www.thoughtworks.com/en-br/about-us/diversity-and-inclusion/aceleradora">
            Aceleradora Ágil & Inclusiva
          </a>
          , two social projects focused on technology education for the
          underprivileged. For two years, as a <strong>leader</strong>, I
          gathered together hundreds of volunteersfrom different roles (and
          companies) and directed the creation of the technical content and
          social dimension of Aceleradora Inclusiva. As a{" "}
          <strong>teacher</strong>, I was daily in the classroom, learning how
          to teach and, in the process, paving the way for the first steps of
          dozens of young students the IT industry. This hub features our HTML,
          CSS and Javascript projects created during this time.
          <em>(2018—2020)</em>
        </p>
      </div>

      <div>
        <a href="https://fernandomachado90.github.io/aura-social/">
          <h3>Aura Social</h3>
          <img src={AssetAuraSocial} />
        </a>
        <p>
          Find out which colors emanate from your Instagram feed on this fun
          little app. If you want to try it out, message me so I can grant you
          'beta tester' access.
          <em>(2020)</em>
        </p>
      </div>

      <div>
        <a href="https://fer-nando-machado.github.io/codebook/">
          <h3>CodeBook</h3>
          <img src={AssetCodebook} />
        </a>
        <p>
          Open-source learning tool that allows to users to follow textbook
          contents while practicing HTML, CSS and JS using a live code editor.
          <em>(2020)</em>
        </p>
      </div>

      <div>
        <a href="https://github.com/fer-nando-machado/coin-identifier">
          <h3>Coin Identifier</h3>
          <img src={AssetCoinIdentifier} />
        </a>
        <p>
          An OpenCV script that identifies Brazilian Real coins on digital
          images using Circle Hough Transform and SIFT for feature-extraction
          and SVM for matching. This was the final paper for my graduation in
          Computer Science at UNIFESP (Universidade Federal de São Paulo).
          <em>(2015)</em>
        </p>
      </div>

      <div>
        <a href="https://github.com/fer-nando-machado/DK3D/">
          <h3>Donkey Kong 3D</h3>
          <img src={AssetDK3D} />
        </a>
        <p>
          An OpenGL 3D remake, written in pure C, of the original Donkey Kong
          arcade game released 1981. A project developed during my Computer
          Graphics course at UNIFESP (Universidade Federal de São Paulo).
          <em>(2013)</em>
        </p>
      </div>

      <div className="highlight">
        <a href="https://fer-nando-machado.github.io/dk-redux/#M">
          <h3>DK-Redux</h3>
          <img src={AssetDKRedux} />
        </a>
        <p>
          A reduxed remixed remake of Donkey Kong, the original arcade game from
          1981, built with React and Redux Toolkit, written in TypeScript,
          styled with SCSS and compiled by Vite.
          <em>(2024—)</em>
        </p>
      </div>

      <div>
        <a href="https://github.com/fer-nando-machado/eliza">
          <h3>Eliza</h3>
          <img src={AssetEliza} />
        </a>
        <p>
          Free School Management software, including support for multiple
          users/roles; calendar schedule views; student and teacher
          registration; course management; enrollment processing; payment
          collection and reporting. Cross-platform desktop app, created with
          Electron, Angular and NeDB.
          <em>(2016)</em>
        </p>
      </div>

      <div>
        <a href="https://github.com/fer-nando-machado/github-page-maker">
          <h3>GitHub Page Maker</h3>
          <img src={AssetGitHubPageMaker} />
        </a>
        <p>
          Template repository to quickstart the creation and publishing of
          GitHub Pages with Hugo. Select a custom theme and publish a page like
          this one in minutes.
          <em>(2020)</em>
        </p>
      </div>

      <div>
        <a href="https://github.com/fer-nando-machado/wii-street-view/">
          <h3>Wii Street View</h3>
          <img src={AssetWiiStreetView} />
        </a>
        <p>
          Virtual Reality experiment that uses the Wii Balance Board to simulate
          jogging through the streets of Google Street View running on a web
          browser.
          <em>(2013)</em>
        </p>
      </div>
    </section>
  );
};

export default Projects;
