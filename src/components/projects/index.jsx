import React from "react";
import { Bounce } from "react-reveal";
import Card from "./utils";
import { Style } from "./style";

const Projects = () => {
  return (
    <Style>
      <Bounce>
        <Card
          name={"Weather"}
          img={"weather"}
          link={"weather"}
          source={"weather-mansur"}
        />
        <Card
          name={"Code Editor"}
          img={"styling-tag"}
          link={"code-editor"}
          source={"code-editorby-mansur"}
        />
        <Card
          name={"Text Reader"}
          img={"reader"}
          link={"speaker"}
          source={"speaker-by-mansur-fayziev"}
        />
      </Bounce>
    </Style>
  );
};

export default Projects;
