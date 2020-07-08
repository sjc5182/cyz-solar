import styled from "styled-components";

export const BreadCumbContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;

  img {
    width: 100%;
    height: 220px;
  }

  @media (min-width: 480px) {
    img {
      height: 308px;
    }
  }

  @media (min-width: 640px) {
    img {
      height: 400px;
    }
  }

  @media (min-width: 992px) {
    img {
      height: 520px;
    }
  }

  @media (min-width: 1280px) {
    img {
      height: 676px;
    }
  }

  @media (min-width: 1920px) {
    img {
      height: 880px;
    }
  }
`;

export const Header = styled.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  font-size: 12px;
  color: white;

  @media (min-width: 768px) {
    bottom: 50px;
    left: 30px;
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    bottom: 70px;
    left: 40px;
    font-size: 18px;
  }
`;
