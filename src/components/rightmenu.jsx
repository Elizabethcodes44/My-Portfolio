import "./rightmenu.css";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import reactLogo from "../assets/react.svg";

function Rightmenu() {
  return (
    <>
      <aside className="aside-Container">
        <h2>Tech Stack</h2>
        <div className="Logo2">
          <a href="https://en.wikipedia.org/wiki/HTML">
            <img src={htmlLogo} className="HTML" alt="htmlLogo" />
          </a>
          <a href="https://en.wikipedia.org/wiki/CSS">
            <img src={cssLogo} className="CSS" alt="cssLogo" />
          </a>
          <a href="https://en.wikipedia.org/wiki/React">
            <img src={reactLogo} className="REACT" alt="reactLogo" />
          </a>
        </div>
      </aside>
    </>
  );
}
export default Rightmenu;
