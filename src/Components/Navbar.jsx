import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {useScrollPosition} from "../Components/Hooks/scrollPosition";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    {
      id: 1,
      link: "Inciso A",
    },
    {
      id: 2,
      link: "Inciso B",
    },
     {
       id: 3,
      link: "Inciso C",
     },
     {
     id: 4,
     link: "Inciso D",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen && <p className={styles.logo}>Producto integrador. El final del proceso | Proyecto II | Alejandra Hernández Bonilla</p>}
      {!navBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu
          color="#f1f1f1"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
          />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div>
              <Link
                key={id}
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "Home" ? "Actividades" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id }) => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "Item" ? "Menu principal" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          {/* <Link
            onClick={() => setNavBarOpen(false)}
            to="Contact"
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Registrate
          </Link> */}
        </ul>
      )}
    </div>
  );
};

export default NavBar;