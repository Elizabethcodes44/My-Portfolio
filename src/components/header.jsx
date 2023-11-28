import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate()
  return (
    <>
      <header>
        <p onClick={()=>navigate('/')}>Home</p>
      </header>
    </>
  );
}
export default Header;
