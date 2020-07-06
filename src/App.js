import React from "react";
import { Section, Container } from "./Styled/Container";
import ResponsivePlayer from "./Components/Home/HomeVideo";
import BreadCumb from "./Components/Home/PathWay";
import Logo from "./SVG/Icon/Logo.svg";
import Hamburger from "./SVG/Icon/Hambuger.svg";

import "./App.css";

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: ${(props) => (props.zeroMar ? "0px" : "0px")}
//   }
// `;

function App() {
  return (
    <Section>
      <Container>
        <img src={Logo} alt="Logo" />
        <img src={Hamburger} alt="Hamburger" />
      </Container>
      <ResponsivePlayer />
      <BreadCumb />
      <div style={{ textAlign: "center" }}>
        <h2>Made for Enviromental Families</h2>
        <h5 style={{ opacity: "70%" }}>solar pathway from home to business</h5>
      </div>
    </Section>
  );
}

export default App;
