import React, { useState } from "react";
import { Wrapper } from "../../Styled/ReusableComponents/NavBar";
import { useHistory } from "react-router-dom";
import DropDownMenu from "../ReusableComponents/MobileDropDown";
import Logo from "../../SVG/Icon/Logo.svg";
import Hamburger from "../../SVG/Icon/Hambuger.svg";

function NavBar() {
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };

  return (
    <div>
      <Wrapper>
        {console.log(open)}
        <img src={Logo} alt="Logo" onClick={() => handleLogo()} />
        <img src={Hamburger} alt="Hamburger" onClick={() => setOpen(!open)} />
      </Wrapper>
      <DropDownMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default NavBar;
