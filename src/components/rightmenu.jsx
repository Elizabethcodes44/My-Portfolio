import "./rightmenu.css";
import ProfilePic from "../assets/Elizabeth.jpeg";
function Rightmenu() {
  return (
    <>
      <aside className="aside-Container">
        <img src={ProfilePic} className="Profile-Pic" alt="Profile-Pic" />

        <button className="right-Button">PROJECTS</button>
      </aside>
    </>
  );
}
export default Rightmenu;
