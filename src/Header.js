import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ companyName }) => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      <img src="./logo.png" className="App-logo1" alt="Zand-Software"></img>
      <h1>&copy; {companyName}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
