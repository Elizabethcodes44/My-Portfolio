import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import reactLogo from "../assets/react.svg";
import "./About.css";
function About() {
  return (
    <div className="About">
      <div className="aboutme">
        <h3>Hello, I`m </h3> <h1>Elizabeth Kujore</h1>{" "}
        <h3> A FULL-STACK Developer</h3>
        <p>
          <strong>
            {" "}
            I am a Junior Full Stack Developer based in Turkey, passionate about continuous learning and skill expansion. I have a diverse skill set ranging from front-end (HTML, CSS, JavaScript, React JS) to back-end (Node.js, Express) development. With a unique perspective from living in Turkey, I am driven to contribute to the global tech community, valuing diversity and collaboration. Eager to connect with fellow professionals, I thrive on networking and engaging in discussions. Outside of coding, I love exploring new places, drawing creativity from different cultures. Additionally, I enjoy making clothes for my family, emphasizing craftsmanship and attention to detail—values that I bring to my coding projects. Open to relocation, I am seeking opportunities to contribute to innovative projects aligned with my values. If you're looking for a passionate, adaptable, and collaborative junior full-stack developer, I invite you to connect and build something amazing together. 
            
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
