import React from "react";
import { Style } from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "../../utils";
import { Zoom } from "react-reveal";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Style>
      <div className="text">
        <h1>
          <Zoom top cascade>
            Talk Is Cheap
          </Zoom>
        </h1>
        <h1>
          <Zoom top cascade>
            Show Me The Code
          </Zoom>
        </h1>
        <p>
          <Zoom top cascade>
            I Design And Code Beautifully Simple Things And I Love What I Do
          </Zoom>
          <Zoom top cascade>
            I'm Full Stack Developer
          </Zoom>
        </p>
        <Zoom left>
          <Button onClick={() => navigate("/about")}>About</Button>
        </Zoom>
      </div>
      <div className="image">
        <Zoom bottom>
          <div className="box">
            <div></div>
            <div className={"active"}></div>
            <div></div>
          </div>
        </Zoom>
      </div>
    </Style>
  );
};

export default Home;
