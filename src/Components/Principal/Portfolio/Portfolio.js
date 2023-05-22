import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";

const dataPortfolio = [
  {
    id: 1,
    image: IMG1,
    tital: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/MickyC110181137/my-app",
    demo: "https://arknights-cover-imitate.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    tital: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/MickyC110181137/WEBHW",
    demo: "https://hwork-html.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {dataPortfolio.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
