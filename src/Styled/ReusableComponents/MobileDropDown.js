import styled from "styled-components";

export const DropDownContainer = styled.div`
  ${({ isMobile, open, isID }) =>
    isMobile
      ? `
  height: ${open ? "100px" : "0px"};
  opacity: ${open ? 1 : 0};
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f6fe;
  transform: ${open ? "translateY(0)" : "translateY(-100%)"};
  transition: transform .8s ease, opacity ease .1s;
  `
      : `
  height: 80px;
  width: 400px;
  display: ${!isMobile && isID === "1" ? "flex" : "none"};
  align-items: center;
  justify-content: space-between;
  `}

  a {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: darkgray;

    &:hover {
      color: green;
    }

    /* @media (min-width: 768px) {
    } */
  }
  /* ul {
    padding-inline-start: 0px;
  }
  li {
    list-style-type: none;
    padding: 0px;
  } */
`;
