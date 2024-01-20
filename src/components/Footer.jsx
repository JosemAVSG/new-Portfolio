import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid foot">
      <footer className="pie">
        <p style={{ color: "white" }}>
          CopyRight <FontAwesomeIcon icon={faCopyright} /> | Coded By Jose
          Miguel Gonzalez
        </p>

        <div className="footer-social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/josemavsg"
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-footer" />
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/JosemAVSG"
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCodepen} className="social-footer" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JosemAVSG"
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="social-footer" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
