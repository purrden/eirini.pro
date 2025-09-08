import EiriniUserpic from "@assets/images/eirini-userpic.svg";
import Logo from "@assets/images/logo.svg";
import "@shared/styles/index.css";
import "./Header.css";
import { useLocation } from "preact-iso";

export default function Header() {
  const location = useLocation();

  return <header>
    <div className="centered-column">
      <div className="row">
        <button id="logo-button" onClick={() => location.route("/")}>
          <img id="logo" src={Logo} />
        </button>
        <a id="lets-have-chat-button" href="mailto:a@a.com">
          <img id="userpic" src={EiriniUserpic} />
          <div id="lets-chat-bubble">
            <p className="desktop">Let's have a chat</p>
            <p className="mobile">Let's chat</p>
          </div>
        </a>
      </div>
    </div>
  </header>
}
