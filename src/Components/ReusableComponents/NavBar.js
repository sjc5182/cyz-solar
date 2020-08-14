import React from "react";
import { Wrapper } from "../../Styled/ReusableComponents/NavBar";
import Logo from "../../SVG/Icon/Logo.svg";
import Hamburger from "../../SVG/Icon/Hambuger.svg";

function NavBar(props) {
  return (
    <Wrapper>
      <img src={Logo} alt="Logo" />
      <img src={Hamburger} alt="Hamburger" />
    </Wrapper>
  );
}

export default NavBar;
