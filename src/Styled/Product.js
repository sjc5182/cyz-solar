import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: auto;
  height: 800px;
  span {
    padding-left: 25px;
  }
`;

export const ImgSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    max-width: 80%;
    min-height: 100%;
  }
`;

export const ImgChoiceWrapper = styled.div`
  display: flex;
  img {
    height: 180px;
    width: 250px;
    border: 1px solid green;
  }
`;
