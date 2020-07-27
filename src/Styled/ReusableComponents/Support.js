import styled from "styled-components";

export const SupportWrapper = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  font-size: 0.85rem;
  font-family: "TT Norms Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: rgb(83, 83, 83);
  letter-spacing: -0.03rem;
  margin: 30px 0 40px;
  h1 {
    font-size: 1.25em;
    text-transform: uppercase;
  }
`;
