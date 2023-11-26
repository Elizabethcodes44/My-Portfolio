import gitLogo from "../assets/Github.svg";
import instagramLogo from "../assets/Instagram.svg";
import linkedinLogo from "../assets/Linkedin.svg";
import twitterLogo from "../assets/Twitter.svg";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="footer-Items">
            <a href="https://github.com/Elizabethcodes44">
              <img
                src={gitLogo}
                className="logo"
                alt="gitlogo"
                target="_blank"
              />
            </a>

            <a href="https://www.instagram.com/bukonla_s/">
              <img
                src={instagramLogo}
                className="logo"
                alt="instagramlogo"
                target="_blank"
              />
            </a>
            <a href="https://www.linkedin.com/in/elizabeth-kujore-a8b116128/">
              <img
                src={linkedinLogo}
                className="logo"
                alt="linkedinlogo"
                target="_blank"
              />
            </a>
            <a href="https://twitter.com/SonugaZ">
              <img
                src={twitterLogo}
                className="logo"
                alt="twitterlogo"
                target="_blank"
              />
            </a>
            <Link to="/form">Let`s Chat</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
