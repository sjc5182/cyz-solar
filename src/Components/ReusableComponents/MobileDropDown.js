import React from "react";
import { bool, func } from "prop-types";
import { DropDownContainer } from "../../Styled/ReusableComponents/MobileDropDown";

function DropDownMenu({ isMobile, open }) {
  const navLinks = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Product", path: "/Product" },
    { id: 1, text: "Contact", path: "/Contact" },
    { id: 1, text: "Login", path: "/Login" },
  ];
  return (
    <DropDownContainer open={open} isMobile={isMobile}>
      {navLinks.map((links) => (
        <a href={links.path}>{links.text}</a>
      ))}
    </DropDownContainer>
  );
}

DropDownMenu.prototype = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default DropDownMenu;
