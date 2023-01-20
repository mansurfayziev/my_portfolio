import { ParallaxHover } from "react-parallax-hover";
import styled from "styled-components";
import { Button, theme } from "../../utils";

const Line = styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  margin: 40px auto;
  border-radius: 50px;
  background: ${theme.div};
  .info {
    h1 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const MLine = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 20px auto;
  border-radius: 20px;
  background: ${theme.div};
  display: none;
  text-align: center;
  h1 {
    font-size: 40px;
  }
  button {
    margin: 20px auto;
  }
  img {
    border-radius: 10px;
  }
  @media screen and (max-width: 750px) {
    display: block;
  }
`;

const Card = ({ name, img, link, source }) => {
  return (
    <>
      <Line>
        <ParallaxHover
          width={500}
          height={230}
          borderRadius={10}
          shadow={10}
          rotation={10}
          shine={3}
          scale={3}
          className="parallax"
        >
          <div className="card">
            <img src={require(`../../assets/portfolio-img/${img}.png`)} />
          </div>
        </ParallaxHover>
        <div className="info">
          <h1>{name}</h1>
          <a href={`https://${source}.vercel.app`}>
            <Button>Check This Project</Button>
          </a>
          <a href={`https://github.com/mansurfayziev/${link}`}>
            <Button>
              <img
                src={require("../../assets/github.png")}
                className="gitimg"
              />{" "}
              Github Code
            </Button>
          </a>
        </div>
      </Line>
      <MLine>
        <div className="card">
          <img src={require(`../../assets/portfolio-img/${img}.png`)} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <a href={`https://${source}.vercel.app`}>
            <Button>Check This Project</Button>
          </a>
          <a href={`https://github.com/mansurfayziev/${link}`}>
            <Button>
              <img
                src={require("../../assets/github.png")}
                className="gitimg"
              />{" "}
              Github Code
            </Button>
          </a>
        </div>
      </MLine>
    </>
  );
};

export default Card;
