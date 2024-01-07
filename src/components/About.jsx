import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import reactLogo from "../assets/react.svg";
import "./About.css";
function About() {
  return (
    <div className="About">
      <div>
        <h3>Hello, I`m </h3> <h1>Elizabeth Kujore</h1>{" "}
        <h3> A FULL-STACK Developer</h3>
        <p>
          <strong>
            {" "}
            With expertise in both front-end and back-end web development, I
            bring a comprehensive skill set to the table. From designing user
            interfaces and implementing features to managing databases and
            server-side logic, I thrive in handling the entire development
            process. My versatility ensures the creation and maintenance of
            dynamic web applications.
          </strong>
        </p>
      </div>
      <div className="Techstack">
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
      </div>
    </div>
  );
}
export default About;
