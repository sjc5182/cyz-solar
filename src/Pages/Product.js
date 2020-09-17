import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  ItemWrapper,
  ImgSlideWrapper,
  ImgChoiceWrapper,
} from "../Styled/Product";
import W01 from "../Images/W01-image1.png";
import R01 from "../Images/R-01-Solar.png";
import DW from "../Images/Mobile-DriveWay-House.jpg";

const ProductPics = [
  { id: 0, altName: "Item W-01", data: W01 },
  { id: 1, altName: "Item R-01", data: R01 },
  { id: 2, altName: "Item DW", data: DW },
];

function Product() {
  return (
    <ItemWrapper>
      <span>Home / Product</span>
      <ImgSlideWrapper>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#4450E6" />
        <img src={W01} alt="Item W-01" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" color="#4450E6" />
      </ImgSlideWrapper>
      <ImgChoiceWrapper>
        {ProductPics.map((ele) => (
          <img src={ele.data} alt={ele.altName} />
        ))}
      </ImgChoiceWrapper>
    </ItemWrapper>
  );
}

export default Product;
