import React from "react";
import { Section, Container, ProductImg, ItemSlide } from "../Styled/Container";
import { Detail } from "../Styled/ReusableComponents/Text-Intro";
import ResponsivePlayer from "../Components/Home/HomeVideo";
import BreadCumb from "../Components/Home/BreadCumb";
import IntroTemplate from "../Components/ReusableComponents/Text-Intro";
import Logo from "../SVG/Icon/Logo.svg";
import Hamburger from "../SVG/Icon/Hambuger.svg";
import W01 from "../Images/W-01-Solar.png";
import R01 from "../Images/R-01-Solar.png";
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
      <ProductImg>
        <h1>Let your motion do the job.</h1>
        <ItemSlide>
          <img src={R01} alt="Item R-01" />
          <img src={W01} alt="Item W-01" />
        </ItemSlide>
        <div style={{ display: "flex" }}>
          <h2>CYZ R-01 Wall Light</h2>
          <h2>CYZ R-01 Wall Light</h2>
        </div>
      </ProductImg>
    </Section>
  );
}

export default App;
