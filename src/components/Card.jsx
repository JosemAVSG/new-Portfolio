import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGraduationCap,faUser } from "@fortawesome/free-solid-svg-icons";
function Card() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const cardPosition = document
        .getElementById("card")
        .getBoundingClientRect().left;

      if (position > cardPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="card_section">
      <div id="card" className={`card ${isVisible ? "visible" : ""}`}>
        <div className="icon">
          <FontAwesomeIcon fontSize={"70px"} icon={faCode} />
        </div>
        <div className="info">
          <h2>Bootcamp Soy Henry</h2>
          <p>
            Durante el bootcamp de Soy Henry, adquirí habilidades en desarrollo
            web full-stack, incluyendo HTML, CSS, JavaScript, React.js, Node.js
            y bases de datos SQL y NoSQL. Además, desarrollé proyectos prácticos
            que me permitieron aplicar estos conocimientos en situaciones del
            mundo real.
          </p>
        </div>
      </div>
      <div id="card" className={`card ${isVisible ? "visible" : ""}`}>
        <div className="icon">
          <FontAwesomeIcon fontSize={"70px"} icon={faGraduationCap} />
        </div>
        <div className="info">
          <h2>Universidad</h2>
          <p>
            En la universidad, obtuve mi título de Técnico Superior
            Universitario (TSU) en Informática. Durante mis estudios, adquirí
            una sólida base en conceptos fundamentales de la informática, como
            algoritmos, programación orientada a objetos, estructuras de datos y
            diseño de software. Además, desarrollé habilidades en análisis y
            resolución de problemas, lo que me preparó para abordar desafíos
            complejos en el campo de la tecnología.
          </p>
        </div>
      </div>
      <div id="card" className={`card ${isVisible ? "visible" : ""}`}>
        <div className="icon">
          <FontAwesomeIcon fontSize={"70px"} icon={faUser} />
        </div>
        <div className="info">
          <h2>Resumen Profesional</h2>
          <p>
            Soy un desarrollador web full-stack con experiencia en HTML, CSS y
            JavaScript, así como en el desarrollo de aplicaciones web utilizando
            React.js y Node.js. Me apasiona crear experiencias web interactivas
            y dinámicas que brinden valor a los usuarios.
          </p>
          <p>
            Además de mi experiencia técnica, tengo habilidades sólidas en
            resolución de problemas, trabajo en equipo y comunicación efectiva.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
