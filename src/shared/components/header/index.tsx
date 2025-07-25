import EiriniUserpic from "@assets/images/eirini-userpic.svg";
import Logo from "@assets/images/logo.svg";
import "@shared/styles/index.css";
import "./Header.css";

export default function Header() {
  return <header>
    <div className="centered-column">
      <div className="row">
        <img id="logo" src={Logo} />
        <button id="lets-have-chat-button">
          <img id="userpic" src={EiriniUserpic} />
          <div id="lets-chat-bubble">
            <p className="desktop">Let's have a chat</p>
            <p className="mobile">Let's chat</p>
          </div>
        </button>
      </div>
    </div>
  </header>
}
