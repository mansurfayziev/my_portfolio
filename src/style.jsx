import styled from "styled-components";
import { theme } from "./utils";

export const Style = styled.div`
  height: 100vh;
  width: 100%;
  .anime {
    height: 100vh;
    width: 100%;
    position: fixed;
  }
  *::selection {
    background: #e1e1e199;
    color: #fff;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .click {
    animation: cursor 0.5s 1 forwards;
    @keyframes cursor {
      50% {
        height: 100px;
        width: 100px;
      }
      100% {
        height: 50px;
        width: 50px;
      }
    }
  }
  .menu-btn {
    display: none;
    height: 50px;
    width: 50px;
    outline: none;
    border: none;
    border-radius: 100%;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 15;
    background: ${theme.div};
    color: ${theme.color};
    font-size: 40px;
    transition: 0.3s;
  }
  .x {
    transform: rotate(135deg);
  }
  @media screen and (max-width: 750px) {
    .menu-btn {
      display: block;
    }
  }
`;
