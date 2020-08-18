import styled from "styled-components";

export const DropDownContainer = styled.div`
  height: 100px;
  text-align: center;
  background-color: #eaeaea;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100vh)")};
  transition: transform 0.5s ease, opacity ease 0.2s;
  ul {
    padding-inline-start: 0px;
  }
  li {
    list-style-type: none;
    padding: 0px;
  }
`;
