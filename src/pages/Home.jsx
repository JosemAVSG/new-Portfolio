import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Btnwhatsapp } from "../components/Btnwhatsapp";
import homeimg from "../assets/homeimg";
import hojadevida from "../assets/hojadevida.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import ContactForm from "./Contacto";
import  Projects  from './Projects'
const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Desarrollador Web Front End"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Btnwhatsapp />

      <div className="hero">
        <div className="hero-container">
          <div className="hero-container-content">
            <div className="hero-text">
              <h1>
                <span>🙋‍♂️🙋‍♂️🙋‍♂️ Hola !!</span> Yo soy Jose Miguel González Guzmán
              </h1>
              <h2>
                <span ref={el}></span>{" "}
              </h2>
              <p>
                ¡Hola! Un gusto y bienvenido a mi portafolio. Espero que encuentres
                algo de interés y que pueda servirte de ayuda. Te invito a explorar
                este espacio y encontrar información útil acerca de mi carrera y
                experiencia como desarrollador web. ¡Que tengas un buen día!   
              </p>
              <div className="cv">
                <a target="_blank" rel="noopener noreferrer" href={hojadevida}>
                  Descargar Hoja De vida
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ color: "white", marginLeft: "10px" }}
                  />
                </a>
              </div>

              <div className="hero-social">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/josemavsg"
                      rel="noopener"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "white" }}
                        className="social"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://codepen.io/JosemAVSG"
                      rel="noopener"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faCodepen}
                        style={{ color: "white" }}
                        className="social"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/JosemAVSG"
                      rel="noopener"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ color: "white" }}
                        className="social"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hero-img">
              <div className="circulo"></div>
              <img src={homeimg.perfil} alt="Yo" focusable="false" />
            </div>
          </div>
        </div>
      </div>
      

      <Card></Card>
    

      <section className="proyectos">
        <h1>Proyectos</h1>
        <Projects></Projects>
      </section>

      <section className="section1">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            paddingTop: "20px",
          }}
        >
          Hablidades
        </h1>
        <div className="container-skill">
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.js} alt="Javascript" />
              </div>
              <h3>Javascript</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.html} alt="Html" />
              </div>
              <h3>HTML5</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon css" src={homeimg.css} alt="CSS3" />
              </div>
              <h3>CSS3</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.react} alt="React" />
              </div>
              <h3>React</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.mongo} alt="MongoDb" />
              </div>
              <h3>MongoDb</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.mysql} alt="Mysql" />
              </div>
              <h3>Mysql</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img
                  className="skill-icon"
                  src={homeimg.boostrap}
                  alt="boostrap"
                />
              </div>
              <h3>Boostrap</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.redux} alt="redux" />
              </div>
              <h3>Redux</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.Node} alt="node" />
              </div>
              <h3>Node Js</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.Sass} alt="sass" />
              </div>
              <h3>Sass</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.typescript} height={60}  alt="typescript" />
              </div>
              <h3>Typescript</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={homeimg.postgres}  alt="postgres" />
              </div>
              <h3>Postgress</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <h1>Acerca de mi.</h1>
        <div className="aboutme">
          <div className="text">
            <h2 class="about-subtitle">Jose Miguel</h2>
            <p class="about__description">
              Mi nombre es Jose Miguel, pero me dicen Miguel. Tengo 28 años vivo
              en colombia pero soy de Venezuela, actualmente trabajo como
              Tecnico en reparacion de computadoras y dispositivos moviles.{" "}
              <br /> <br />
              Me considero una persona responsable, amable y comprometida.{" "}
              <br />
              Me gusta tocar la guitarra y escuchar música de vez en cuando
              y jugar videojuegos como LOL , CS:GO y World of Warcraft. <br />
            </p>
            <p>
              Siempre dispuesto al trabajo en equipo, full autodidacta y en
              aprendizaje continuo.
            </p>
          </div>
          <div className="image">
            <img alt="Image not found" src={homeimg.dev}></img>
          </div>
        </div>
      </section>
      <section id="contacto">
        <ContactForm></ContactForm>
      </section>
    </div>
  );
};

export default Home;
