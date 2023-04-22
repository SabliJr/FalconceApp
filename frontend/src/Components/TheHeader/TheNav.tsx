import "./Navbar.css";
import { useNavigate } from "react-router-dom";

//Icons
import { SiFalcon } from "react-icons/si";

//Component
import Search from "./Search";

const Navbar = (): JSX.Element => {
  let navigate = useNavigate();

  return (
    <nav className='NavBar'>
      <div
        className='LogoDiv'
        onClick={() => {
          navigate("/");
        }}>
        <div className='LogoIcon'>
          <SiFalcon />
        </div>
        <h1 className='Logo'>Falconce</h1>
      </div>
      <Search />
    </nav>
  );
};

export default Navbar;
