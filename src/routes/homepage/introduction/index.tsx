import HouseAmongLeaves from "../../../assets/lottie/house_among_leaves.json";
import RecyclingSign from "../../../assets/lottie/recycling_sign.json";
import PeoplePlantingTogether from "../../../assets/lottie/people_planting_together.json";
import Chapter from "./Chapter";
import { Player } from "@lottiefiles/react-lottie-player";
import Content from "../../../content/main";
import "./Introduction.css";


const introAnimations = [
  PeoplePlantingTogether,
  RecyclingSign,
  HouseAmongLeaves,
];

export default function Introduction() {
  return <section id="eirini-intro">
    <div className="centered-column">
      <div className="cards row items-aligned-top">
        {introAnimations.map((animation, index) => (
          <div className={`intro-card intro-card-${index}`} key={`intro-card-${index}`}>
            <div className="player-container">
              <Player autoplay loop src={animation} />
            </div>
            <Chapter text={Content.page.intro[index]} />
          </div>
        ))}
      </div>
    </div>
  </section>
}
