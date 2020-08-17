import React from "react";
import { Detail } from "../Styled/ReusableComponents/Text-Intro";
import ResponsivePlayer from "../Components/Home/HomeVideo";
import BreadCumb from "../Components/Home/BreadCumb";
import IntroTemplate from "../Components/ReusableComponents/Text-Intro";
import ProductList from "../Components/Home/ProductList";
import Support from "../Components/ReusableComponents/Support";

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: ${(props) => (props.zeroMar ? "0px" : "0px")}
//   }
// `;

function Home() {
  return (
    <>
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
      <ProductList />
      <Support />
    </>
  );
}

export default Home;
