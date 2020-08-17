import React from "react";

function DropDown() {
  const navLinks = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Product", path: "/Product" },
    { id: 1, text: "Contact", path: "/Contact" },
    { id: 1, text: "Login", path: "/Login" },
  ];
  return (
    <ul>
      {navLinks.map((links) => (
        <li>{links.text}</li>
      ))}
    </ul>
  );
}

export default DropDown;
