import React from "react";
import { bool, func } from "prop-types";
import { DropDownContainer } from "../../Styled/ReusableComponents/MobileDropDown";

function DropDownMenu({ open }) {
  const navLinks = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Product", path: "/Product" },
    { id: 1, text: "Contact", path: "/Contact" },
    { id: 1, text: "Login", path: "/Login" },
  ];
  return (
    <DropDownContainer open={open}>
      <ul>
        {navLinks.map((links) => (
          <li>{links.text}</li>
        ))}
      </ul>
    </DropDownContainer>
  );
}

DropDownMenu.prototype = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default DropDownMenu;
