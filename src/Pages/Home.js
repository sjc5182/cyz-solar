import React from "react";
import { Section, Container } from "../Styled/Container";
import { Detail } from "../Styled/ReusableComponents/Text-Intro";
import ResponsivePlayer from "../Components/Home/HomeVideo";
import BreadCumb from "../Components/Home/BreadCumb";
import IntroTemplate from "../Components/ReusableComponents/Text-Intro";
import Logo from "../SVG/Icon/Logo.svg";
import Hamburger from "../SVG/Icon/Hambuger.svg";
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
      <Detail>
        <div style={{ textAlign: "center" }}>
          <h2>Made for Enviromental Families</h2>
          <h5 style={{ opacity: "70%" }}>
            solar pathway from home to business
          </h5>
        </div>
        <IntroTemplate />
      </Detail>
    </Section>
  );
}

export default App;