import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTools, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {
  DetailContainer,
  DetailSlide,
  IconBorder,
} from "../../Styled/ReusableComponents/Text-Intro";

const contents = [
  {
    icons: faCog,
    DescTitle: "Simple Installation",
    context:
      "Wiring free, wireless remote control to assist you with light effect and brightless",
  },
  {
    icons: faTools,
    DescTitle: "Hazard Free & Free Energy",
    context:
      "PET material with good resistance to heat, and protection passed rating at IP67 to support three years of solar energy",
  },
  {
    icons: faLightbulb,
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
            <IconBorder>
              <FontAwesomeIcon icon={content.icons} size="lg" color="#4450E6" />
            </IconBorder>
            <h3>{content.DescTitle}</h3>
            <h5>{content.context}</h5>
          </DetailSlide>
        ))}
      </DetailContainer>
    );
  }
}

export default IntroTemplate;
