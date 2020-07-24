import styled from "styled-components";
import bgIMG from "../../Images/cool-background.png";

export const ProductImg = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${bgIMG});
  h1 {
    padding-top: 35px;
    text-align: center;
    font-size: 30px;
    color: white;
    font-family: sans-serif;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const ItemSlide = styled.div`
  height: 700px;
  text-align: center;
  @media (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 300px;
    margin: 0 150px 0 120px;
  }
`;

export const ProductHeader = styled.div`
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    text-align: center;
    font-size: 25px;
    letter-spacing: 0.5px;
    color: #ffffff;
  }
  img {
    width: 300px;
    margin: auto;
  }
`;
