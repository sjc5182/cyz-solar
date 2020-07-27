import styled from "styled-components";
import bgIMG from "../../Images/cool-background.png";

export const ProductImg = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${bgIMG});
  color: #ffffff;
  h1 {
    padding-top: 25px;
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
  height: 800px;
  font-family: "TT Norms Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-align: center;
  @media (min-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 450px;
  }
`;

export const ProductHeader = styled.div`
  display: grid;
  place-items: center;
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 25px;
    letter-spacing: 0.5px;
  }
  img {
    width: 300px;
    margin: auto;
  }
  @media (min-width: 640px) {
    padding: 0 2rem;
  }
  @media (min-width: 992px) {
    padding: 0 4rem;
  }
  @media (min-width: 1280px) {
    padding: 0 10rem;
  }
`;
