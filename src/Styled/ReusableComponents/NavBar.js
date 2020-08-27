import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0px 15px;

  img {
    padding-left: 10px;
    cursor: pointer;
  }
  /* @media (min-width: 768px) {
    img {
      margin: 10px 30px;
    }
  }

  @media (min-width: 1024px) {
    img {
      margin: 10px 45px;
    }
  } */
`;

export const HamburgerWrapper = styled.div`
  width: 60px;
  height: auto;
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  span {
    width: 35px;
    height: 5px;
    background-color: #4450e6;
    opacity: 80%;
  }
`;
