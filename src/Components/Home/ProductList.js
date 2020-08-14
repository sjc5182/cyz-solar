import React from "react";
import {
  ProductImg,
  ItemSlide,
  ProductHeader,
} from "../../Styled/Home/ProductList";
import { useHistory } from "react-router-dom";
import Button from "../../Components/ReusableComponents/Button";
// import Product from "../../Pages/Product";
import W01 from "../../Images/W-01-Solar.png";
import R01 from "../../Images/R-01-Solar.png";

function ProductList() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/Product");
  };

  return (
    <ProductImg>
      <h1>Let your motion do the job.</h1>
      <ItemSlide>
        <ProductHeader>
          <img src={R01} alt="Item R-01" />
          <p>CYZ R-01 Wall Light</p>
          <p>$35</p>
          <button />
        </ProductHeader>
        <ProductHeader>
          <img src={W01} alt="Item W-01" style={{ paddingTop: "25px" }} />
          <p style={{ paddingTop: "25px" }}>CYZ W-01 Wall Light</p>
          <p>$32</p>
          <Button handleClick={handleClick} />
        </ProductHeader>
      </ItemSlide>
    </ProductImg>
  );
}

export default ProductList;
