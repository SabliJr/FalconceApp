import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

//Icons
import { SiFalcon } from "react-icons/si";
import { FaChartPie } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { RiMenuLine } from "react-icons/ri";

//Component
import Search from "../Search/SearchData";

const Navbar = (): JSX.Element => {
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  // let menuRef = useRef<HTMLLIElement>(null);
  const bergerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handleMenu = (
      e: React.MouseEvent<HTMLUListElement, HTMLDivElement>
    ) => {
      if (
        // !menuRef?.current?.contains(e.target as Node) &&
        !bergerRef?.current?.contains(e.target as HTMLElement)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMenu as () => void);

    return () => {
      document.removeEventListener("mousedown", handleMenu as () => void);
    };
  }, []);

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
      <div className='menu'>
        <ul className={isOpen ? "isOpen ulList" : "ulList"}>
          <li
            // ref={menuRef}
            onClick={() => {
              navigate("portfolio");
            }}>
            <FaChartPie />
            Portfolio
          </li>
          <li
            onClick={() => {
              navigate("watch-list");
            }}>
            <TiStarFullOutline />
            WatchList
          </li>
        </ul>
        <Search />
        <div ref={bergerRef} onClick={() => setOpen(!isOpen)}>
          <RiMenuLine className='Berger' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
