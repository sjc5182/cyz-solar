import styled from "styled-components";

export const Section = styled.div`
  max-width: 100vw;
  height: 100vh;
  @import url('link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet"');
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
