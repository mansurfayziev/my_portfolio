import React from "react";
import { Style } from "./style";
import { Zoom } from "react-reveal";

const About = () => {
  return (
    <Style>
      <div className="block">
        <Zoom>
          <div className="box">
            <img src={require("../../assets/about/htmlcss.png")} />
            HTML & CSS
          </div>
          <div className="box">
            <img src={require("../../assets/about/bootstrap.png")} />
            Bootstrap
          </div>
          <div className="box">
            <img src={require("../../assets/about/js.png")} />
            JavaScript
          </div>
          <div className="box">
            <img src={require("../../assets/about/vue.jpg")} />
            Vue
          </div>
          <div className="box">
            <img src={require("../../assets/about/py.png")} />
            Python
          </div>
          <div className="box">
            <img src={require("../../assets/about/dj.webp")} />
            Django
          </div>
        </Zoom>
      </div>
      <Zoom right>
        <div className="text">
          <p>Introduce</p>
          <h1>Hello? I'm Mansur Fayziev</h1>
          <h3>Every great design begin with an even better story</h3>
          <p>
            I am Mansur. My last name is Fayziev. I'm{" "}
            {JSON.stringify(new Date()).substring(1, 5) - 2005} years old. I am
            Tajik. I can speak Russian, Uzbek, English and Tajik. My skills: Html, CSS, Js, Vue, bootstrap, vb.net, Django, Python and I Full Stack Developer.
          </p>
        </div>
      </Zoom>
    </Style>
  );
};

export default About;
