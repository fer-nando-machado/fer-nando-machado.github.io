import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

const year = new Date().getFullYear();

function App() {
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <main>
        {!zoom && (
          <figure>
            <header>
              <h1>Fernando Machado</h1>
              <strong>Software Engineer</strong>
            </header>
            <footer>
              © {year} Fernando Machado. Photo by Ana Daros. Icon by{" "}
              <a href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a>
            </footer>
          </figure>
        )}
        <article>
          <Outlet />
        </article>
      </main>
      <nav>
        <Link to="/">Hello</Link>
        <Link to="/work">Work</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/connect">Connect</Link>
      </nav>
      <aside
        className={`${zoom ? "shrink" : "expand"}`}
        onClick={() => setZoom(!zoom)}
        aria-label="Zoom"
        title="Zoom"
      />
    </>
  );
}

export default App;
