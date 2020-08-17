import React from "react";
import { Wrapper } from "../../Styled/ReusableComponents/NavBar";
import { useHistory } from "react-router-dom";
import Logo from "../../SVG/Icon/Logo.svg";
import Hamburger from "../../SVG/Icon/Hambuger.svg";

function NavBar({ DropDownMenu }) {
  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <img src={Logo} alt="Logo" onClick={() => handleLogo()} />
      <img src={Hamburger} alt="Hamburger" onClick={() => DropDownMenu()} />
    </Wrapper>
  );
}

export default NavBar;
