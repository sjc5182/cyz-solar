import styled from "styled-components";
import bgIMG from "../Images/cool-background.png";

export const Section = styled.div`
  max-width: 100vw;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin: 10px 15px;
  }

  @media (min-width: 768px) {
    img {
      margin: 10px 30px;
    }
  }

  @media (min-width: 1024px) {
    img {
      margin: 10px 45px;
    }
  }
`;
export const ProductImg = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  background-image: url(${bgIMG});
  h1 {
    padding-top: 60px;
    text-align: center;
    font-size: 50px;
    letter-spacing: 1px;
    color: white;
    font-family: sans-serif;
  }
`;

export const ItemSlide = styled.div`
  display: flex;
  width: auto;
  height: 600px;

  img {
    width: 300px;
    margin: auto;
  }
`;
