import React from "react";
import { LearnButton } from "../../Styled/ReusableComponents/Button";

function Button(props) {
  return <LearnButton onClick={props.handleClick}>LEARN MORE</LearnButton>;
}

export default Button;
