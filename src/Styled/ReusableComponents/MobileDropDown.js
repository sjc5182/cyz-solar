import styled from "styled-components";

export const DropDownContainer = styled.div`
  ${({ isMobile, open }) =>
    isMobile
      ? `
  height: 100px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
      : `
  height: 80px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `}
  background-color: #f5f6fe;

  /* transform: ${({ open, isMobile }) =>
    open & isMobile
      ? "translateY(0)"
      : "translateY(-100vh)"};
  transition: transform 0.5s ease, opacity ease 0.2s; */

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
