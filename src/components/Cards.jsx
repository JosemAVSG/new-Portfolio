import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Cards = (props) => {
  return (
    <StyledCard>
      <div className="card">
        <div className="card-body">
          <img src={props.img}></img>
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
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
    width: 400px;
    min-height: 430px;
    margin: 10px;
    box-shadow: 0 2px 20px gray;
    border-radius: 0.2rem;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    transition: transform 200ms ease-in;
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
  }

  .card-description {
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
