import gitLogo from "../assets/Github.svg";
import instagramLogo from "../assets/Instagram.svg";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div>
          <a href="https://github.com/Elizabethcodes44">
            <img src={gitLogo} className="logo" alt="gitlogo" target="_blank" />
          </a>
          <a href="https://www.instagram.com/bukonla_s/x">
            <img src={instagramLogo} className="logo" alt="React logo"  target="_blank"/>
          </a>

        </div>
      </footer>
    </>
  );
}
export default Footer;
