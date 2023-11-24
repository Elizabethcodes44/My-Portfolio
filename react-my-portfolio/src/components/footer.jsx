import gitlogo from "../assets/Github.svg";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div>
          <a href="https://github.com/Elizabethcodes44" target="_blank">
            <img src={gitlogo} className="logo" alt="Vite logo" />
          </a>
          <a href="" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
