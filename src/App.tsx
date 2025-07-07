import "./App.css";
import Logo from "./assets/images/logo.svg";
import EiriniUserpic from "./assets/images/eirini-userpic.svg";
import HouseAmongLeaves from "./assets/lottie/house_among_leaves.json";
import BeamingSticks from "./assets/lottie/beaming_sticks.json";
import RecyclingSign from "./assets/lottie/recycling_sign.json";
import CornerSticks from "./assets/lottie/corner_sticks.json";
import DancingCircle from "./assets/lottie/dancing_circles.json";
import PeoplePlantingTogether from "./assets/lottie/people_planting_together.json";
import Stones from "./assets/lottie/stones.json";
import Zigzags from "./assets/lottie/zigzags.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Content from "./content/main.json";

function getPiecesOf(text: string) {
  // We expect only one nbsp object between a pair of * symbols
  // example:
  // "It will cost *7 pounds* and change"
  //   => ["It will cost ", "7 pounds", " and change"]
  const nbspContentPattern = /^(.*?)\*(.*?)\*(.*)$/;
  return (nbspContentPattern.exec(text) || []).filter((s) => s !== text);
}

interface ChapterProps {
  text: string;
}

function Chapter({ text }: ChapterProps) {
  const pieces = getPiecesOf(text);

  if (pieces.length < 2) {
    return <p className="intro-chapter">{text}</p>;
  }

  const nbspParts = pieces[1].split(" ");
  return (
    // TODO: refactor all of it into something that returns nbsp'ed
    <p className="intro-chapter">
      {pieces[0]}
      {`${nbspParts[0]}`}&nbsp;{`${nbspParts[1]}`}
      {pieces[2]}
    </p>
  );
}

const introAnimations = [
  PeoplePlantingTogether,
  RecyclingSign,
  HouseAmongLeaves,
];

function App() {
  return (
    <div>
      <header>
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

      <main>
        <section id="eirini-intro">
          <div className="centered-column">
            <div className="cards row items-aligned-top">
              {introAnimations.map((animation, index) => (
                <div className={`intro-card intro-card-${index}`} key={`intro-card-${index}`}>
                  <div className="player-container">
                    <Player autoplay loop src={animation} />
                  </div>
                  <Chapter text={Content.page.section.intro[index]} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
