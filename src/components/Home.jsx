import "./Home.css";
import image from "../assets/webpic.jpg";

function Main() {
  return (
    <>
      <main className="main-Container">
        <div>
          <div className="Homepage">
            <img
              src={image}
              className="mypicture"
              alt="mypicture"
              target="_blank"
            />
            <h3>Elizabeth Kujore</h3>
            <p>Software developer</p>
            <h5>Thank you for visiting my portfolio.</h5>{" "}
            <h5>Let's build something amazing together! 🚀</h5>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
export default Main;
