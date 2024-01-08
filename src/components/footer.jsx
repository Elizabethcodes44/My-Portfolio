import gitLogo from "../assets/github1.svg";
import instagramLogo from "../assets/instagram1.svg";
import linkedinLogo from "../../src/assets/linkedin.svg";
import twitterLogo from "../../src/assets/twitterx.svg";

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
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
