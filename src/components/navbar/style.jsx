import styled from "styled-components";
import { theme } from "../../utils";

export const Style = styled.div`
  height: 80px;
  backdrop-filter: blur(30px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.3s;
  .gitlink {
    display: flex;
    align-items: center;
    img {
      margin: 10px;
    }
  }
  .name {
    font-size: 25px;
    color: ${theme.element};
  }
  div a {
    position: relative;
    margin: 0 10px;
  }
  .act {
    color: ${theme.element};
    &::before {
      content: "";
      position: absolute;
      bottom: -10px;
      height: 3px;
      background: ${theme.element};
      animation: a 0.3s linear forwards;
      @keyframes a {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    }
  }
  .github {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 30px;
    }
  }
  .open {
    left: -100%;
  }
  @media screen and (max-width: 750px) {
    height: 100vh;
    width: 100%;
    flex-wrap: wrap;
    backdrop-filter: blur(10px);
    background: #1e1e1ed7;
    justify-content: center;
    left: -100%;
    .name,
    a {
      text-align: center;
      margin: auto;
      width: 100%;
    }
  }
`;
