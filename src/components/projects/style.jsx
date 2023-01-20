import styled from "styled-components";
import { theme } from "../../utils";

export const Style = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 50px;
  color: ${theme.color};
  border: 0.1px double transparent;
  background: ${theme.background};
  img {
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    padding: 0;
  }
`;
