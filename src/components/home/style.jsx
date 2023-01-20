import styled from "styled-components";
import { theme } from "../../utils";
import hero from "../../assets/hero-1.png";
import vue from "../../assets/icons/vue.jpg";
import py from "../../assets/icons/py.png";
import dj from "../../assets/icons/dj.webp";

export const Style = styled.div`
  height: 100vh;
  width: 100%;
  background: ${theme.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  .text {
    h1 {
      color: ${theme.color};
    }
    p {
      margin-top: 30px;
      color: ${theme.pColor};
    }
  }
  .image {
    height: 100vh;
    width: 50%;
    position: relative;
    pointer-events: none;
    .box {
      width: 380px;
      height: 80vh;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      overflow: hidden;
      background: url(${hero});
      background-repeat: no-repeat;
      background-size: cover;
      div {
        position: absolute;
        border: 10px solid ${theme.div};
      }
      div:nth-child(1) {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        top: 140px;
        right: 10px;
        background: ${theme.div} url(${vue});
        background-repeat: no-repeat;
        background-size: cover;
      }
      div:nth-child(2) {
        height: 80px;
        width: 80px;
        top: 250px;
        border-radius: 50%;
        background: ${theme.div} url(${py});
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
      }
      .active {
        animation: div 5s infinite linear;
        @keyframes div {
          100% {
            transform: rotate(360deg);
          }
        }
      }
      div:nth-child(3) {
        height: 100px;
        width: 100px;
        top: 350px;
        right: 40px;
        border-radius: 50%;
        background: ${theme.div} url(${dj});
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
    .text {
      height: 100vh;
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      text-align: center;
    }
    .image {
      height: 65vh;
      width: 85%;
      .box {
        width: 100%;
        height: 100%;
        div:nth-child(3) {
          top: 300px;
          right: 40px;
        }
      }
    }
  }
`;
