import styled from "styled-components";

export const Wrapper = styled.div`
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
