import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav>
          <h2 className="initials">EK</h2>
          <ul className="list">
            <li>
              <p className="par" onClick={() => navigate("/")}>
                HOME
              </p>
            </li>
            <li>
              <p className="par" onClick={() => navigate("/projects")}>
                PROJECTS
              </p>
            </li>
            <li>
              <p className="par">CONTACT</p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
