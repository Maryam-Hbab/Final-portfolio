import "./portfolio.css";

import IMG1 from "../../assets/todo-list.png";
import IMG2 from "../../assets/food_blog.jpg";
import IMG3 from "../../assets/weather_website.jpg";
import IMG4 from "../../assets/web_prj.png";
import IMG5 from "../../assets/restaurant_website.jpg";
import IMG6 from "../../assets/Web_mapping.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Todo list Website",
      img: IMG1,
      description:
        "Todo list application with user authentication, MongoDB integration. Users can register, log in, and manage their todos",
      technologies: "React Js | Node js | MongoDB | Express js",
      link: "https://github.com/Maryam-Hbab/To-do-list-",
      github: "https://github.com/Maryam-Hbab/To-do-list-",
    },
    {
      id: 2,
      title: "Master GAGE Website",
      img: IMG4,
      description:
        "Website for our Master’s Program (GAGE), designed using a Bootstrap template",
      technologies: "HTML | Bootstrap ",
      link: "https://master-gage-bootstrap-template.vercel.app/",
      github: "https://github.com/Maryam-Hbab/Master-GAGE-Bootstrap-Template",
    },
    {
      id: 3,
      title: "Food Blog",
      img: IMG2,
      description: "Morocco's Flavors is a food blog featuring Moroccan recipes, built with JavaScript E6S , Tailwind CSS and HTML .",
      technologies: "HTML | Tailwind CSS | JavaScript",
      link: "https://moroccoflavors.vercel.app/",
      github: "https://github.com/Maryam-Hbab/food-blog",
    },
    {
      id: 4,
      title: "Weather website",
      img: IMG3,
      description:
        "A dynamic weather app , providing real-time weather updates for any city worldwide.",
      technologies: "Html | CSS | JavaScript | Leaflet | OpenWeatherMap API",
      link: "https://theweather-coral.vercel.app/",
      github: "https://github.com/Maryam-Hbab/Checkpoint-Network-Requests-in-JavaScript",
    },
    {
      id: 5,
      title: "Restaurant website ",
      img: IMG5,
      description:
        "A responsive Restaurant website built with HTML and CSS",
      technologies: "Html | CSS ",
      link: "https://nomadparadise.vercel.app/",
      github: "https://github.com/Maryam-Hbab/projet_restaurant",
    },
    {
      id: 6,
      title: "WEB GIS",
      img: IMG6,
      description:
        "A web GIS for spatial visualization of projects using PHP, Leaflet, PostGIS, and PostgreSQL",
      technologies: "PHP | Leaflet | PostGIS",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
