import React from "react";
import {
  DetailContainer,
  DetailSlide,
} from "../../Styled/ReusableComponents/Text-Intro";
import Cog from "../../SVG/Icon/Cog.svg";
import Wrench from "../../SVG/Icon/Wrench.svg";
import LightBulb from "../../SVG/Icon/Lightbulb.svg";

const contents = [
  {
    icons: Cog,
    DescTitle: "Simple Installation",
    context:
      "Wiring free, wireless remote control to assist you with light effect and brightless",
  },
  {
    icons: Wrench,
    DescTitle: "Hazard Free & Free Energy",
    context:
      "PET material with good resistance to heat, and protection passed rating at IP67 to support three years of solar energy",
  },
  {
    icons: LightBulb,
    DescTitle: "Capabilities",
    context:
      "Wiring free, wireless remote control to assist you with light effect and brightless",
  },
];

class IntroTemplate extends React.Component {
  render() {
    return (
      <DetailContainer>
        {contents.map((content) => (
          <DetailSlide>
            <div>
              <img src={content.icons} alt="Logos" />
            </div>
            <h3>{content.DescTitle}</h3>
            <h5>{content.context}</h5>
          </DetailSlide>
        ))}
      </DetailContainer>
    );
  }
}

export default IntroTemplate;
