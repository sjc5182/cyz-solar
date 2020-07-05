import styled from "styled-components";

export const BreadCumbContainer = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 220px;
  }

  @media (min-width: 480px) {
    img {
      height: 330px;
    }
  }

  @media (min-width: 640px) {
    img {
      height: 426px;
    }
  }

  @media (min-width: 992px) {
    img {
      height: 639px;
    }
  }

  @media (min-width: 1280px) {
    img {
      height: 852px;
    }
  }

  @media (min-width: 1920px) {
    img {
      height: 1278px;
    }
  }
`;
