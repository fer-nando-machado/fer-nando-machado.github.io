import React from "react";
import AssetBlog from "../assets/blog.png";
import "./Blog.css";

const Blog: React.FC = () => {
  return (
    <section className="blog">
      <a href="https://dev.to/fernandomachado/be-agile-like-water-3l0l">
        <img src={AssetBlog} alt="Agile like Water @ DEV Community" />
        <div>
          <h3>Agile like Water</h3>
          <p>
            Decades after the publication of the Agile Manifesto (2001), there
            is still a lot of confusion about what agile development means.
            Certainly, through a naive association of words, someone might think
            that agile development of software means fast development of
            software. Although this is not untrue, this association is
            insufficient because it does not explicitly state the main goal of
            delivering value constantly.
          </p>
        </div>
      </a>
    </section>
  );
};

export default Blog;
