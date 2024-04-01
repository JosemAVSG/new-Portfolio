import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faBootstrap,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBorderStyle,
  faDatabase,
  faGlobe,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
const Cards = (props) => {
  return (
    <StyledCard>
      <div className="card">
        <div className="card-body">
          <img alt={props.title} src={props.img}></img>
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
        </div>
        <div>
          <ul>
            {props.tech &&
              props.tech.map((techItem, index) => (
                <li key={index}>
                  {techItem === "React" && (
                    <FontAwesomeIcon className="icon" icon={faReact} />
                  )}
                  {techItem === "HTML" && (
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                  )}
                  {techItem === "CSS" && (
                    <FontAwesomeIcon className="icon" icon={faCss3Alt} />
                  )}
                  {techItem === "Tailwind" && (
                    <FontAwesomeIcon className="icon" icon={faPalette} />
                  )}
                  {techItem === "JavaScript" && (
                    <FontAwesomeIcon className="icon" icon={faJs} />
                  )}
                  {techItem === "StyleComponents" && (
                    <FontAwesomeIcon className="icon" icon={faPalette} />
                  )}
                  {techItem === "Boostrap" && (
                    <FontAwesomeIcon className="icon" icon={faBootstrap} />
                  )}
                  {techItem === "Sass" && (
                    <FontAwesomeIcon className="icon" icon={faSass} />
                  )}
                  {techItem === "Node" && (
                    <FontAwesomeIcon className="icon" icon={faNodeJs} />
                  )}
                  {techItem === "Mongo" && (
                    <FontAwesomeIcon className="icon" icon={faDatabase} />
                  )}
                  {techItem}
                </li>
              ))}
          </ul>
        </div>
        <div className="buttons">
          <a
            style={{ alignItems: "center" }}
            className="card-btn"
            target="_blank"
            rel="noopener noreferrer"
            href={props.url}
          >
            Ver Proyecto
            <FontAwesomeIcon icon={faGlobe} className="cardgit" />
          </a>
          <a
            className="card-btn"
            style={{ alignItems: "center" }}
            href={props.git}
            rel="noopener"
            target="_blank"
          >
            Codigo
            <FontAwesomeIcon icon={faGithub} className="cardgit" />
          </a>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Oxygen, sans-serif;
    margin: 2rem;
  }
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .card {
    overflow: hidden;
    width: 25rem;
    height: 27rem;
    margin: 10px;
    box-shadow: 0 2px 20px gray;
    border-radius: 0.2rem;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    transition: transform 200ms ease-in;
    margin-bottom: 5px;
  }

  .card:hover {
    transform: scale(1.02);
  }
  .card img {
    height: 12rem;
    width: 100%;
    object-fit: cover;
  }

  .card-title {
    padding: 1rem;
    color: #2e5a94;
    font-size: 25px;
  }

  .card-description {
    font-size: 16px;
    padding: 0 1rem;
  }
  .card-btn {
    padding: 0.5rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid;
    background: transparent;
    color: #2e5a94;
    border-radius: 0.2rem;
    transition: 200ms ease-in, color 200ms ease-in;
  }
  .card ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    font-size: 20px;
  }
  .card ul > li {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
  .icon {
    display: flex;
    justify-content: center;
  }
  .buttons {
    display: flex;
    justify-content: space-evenly;
  }
  .cardgit {
    font-size: 30px;
    margin-left: 5px;
  }
  .card-btn:hover {
    transform: scale(1.02);

    background: #2e5a94;
    color: white;
  }
`;

export default Cards;
