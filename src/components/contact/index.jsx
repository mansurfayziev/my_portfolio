import React, { useState } from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import { Button } from "../../utils";
import { Style } from "./style";

const Contact = () => {
  const [state, setstate] = useState({});

  const bot = {
    TOKEN: "5935980987:AAFoKiPJ2QNIe3SjBKy8Uu6YjJY7Q5LLCHQ",
    chatID: "5295372766",
  };

  const link = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=`;
  
  const submit = () => {
    if (state.name && state.email && state.message) {
      fetch(link + "I'm " + state.name, {
        method: "GET",
      });
      fetch(link + state.email, {
        method: "GET",
      });
      fetch(link + state.message, {
        method: "GET",
      });
    }
    setstate({});
  };

  return (
    <Style>
      <div className="block">
        <div className="form">
          <h1>
            <Zoom left cascade>
              Contact
            </Zoom>
          </h1>
          <p>
            <Zoom left cascade>
              Feel free to contact us if you need any assistance, any help or
              another question
            </Zoom>
          </p>
          <Bounce>
            <input
              type="text"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                setstate((p) => ({ ...p, name: e.target.value }))
              }
            />
          </Bounce>
          <Bounce>
            <input
              type="email"
              placeholder="Email or Telegram Chat"
              value={state.email}
              onChange={(e) =>
                setstate((p) => ({ ...p, email: e.target.value }))
              }
            />
          </Bounce>
          <Bounce>
            <textarea
              placeholder="Message"
              value={state.message}
              onChange={(e) =>
                setstate((p) => ({ ...p, message: e.target.value }))
              }
            ></textarea>
          </Bounce>
          <Fade bottom>
            <Button onClick={submit}>Submit</Button>
          </Fade>
        </div>
        <div className="card">
          <h2>
            <Zoom top cascade>
              contact me
            </Zoom>
          </h2>
          <Bounce>
            <div>
              <h3>Address</h3>
              I was born in the city of Istaravshan in the Sughd region of the Republic of Tajikistan
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:mansurfayziev005@gmail.com">
                mansurfayziev005@gmail.com
              </a>
            </div>
            <div>
              <h3>Phone Number</h3>
              +992-92-202-03-56
            </div>
            <div>
              <h3>Find me on</h3>
              <div className="links">
              <a href="https://github.com/mansurfayziev" className="gitlink">
                <span className="git">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BD%D1%81%D1%83%D1%80-%D1%84%D0%B0%D0%B9%D0%B7%D0%B8%D0%B5%D0%B2-42412425b" className="gitlink">
                <span className="git">LinkedIn</span>
              </a>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </Style>
  );
};

export default Contact;
