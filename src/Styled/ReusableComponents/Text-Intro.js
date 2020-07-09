import styled from "styled-components";

export const Detail = styled.div`
  background: #f5f6fe;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const DetailSlide = styled.div`
  background: white;
  margin: 25px 30px;
  padding: 20px 25px;
  h3 {
    font-weight: 700;
    font-style: italic;
    opacity: 80%;
    letter-spacing: 1px;
  }
  h5 {
    opacity: 60%;
    line-height: 30px;
    letter-spacing: 1px;
  }
  @media (min-width: 768px) {
    margin: 25px 20px;
    width: 200px;
    height: 300px;
  }
`;

export const IconBorder = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #d8d8d8;
  text-align: center;
  line-height: 50px;
`;
