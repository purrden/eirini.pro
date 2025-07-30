import "./FeaturedProjects.css";
import BeamingSticks from "../../../assets/lottie/beaming_sticks.json";
import CornerSticks from "../../../assets/lottie/corner_sticks.json";
import DancingCircles from "../../../assets/lottie/dancing_circles.json";
import Stones from "../../../assets/lottie/stones.json";
import Zigzags from "../../../assets/lottie/zigzags.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Body } from "@/shared/components/typography";


const projects = [
  { title: "Climate Ready South East Scotland Project", animation: Stones },
  { title: "Climate Adaptation Workshop Facilitation", animation: BeamingSticks },
  { title: "Producing & Delivering ECCAN News & Podcast", animation: Zigzags },
  { title: "Eirini’s Blogosphere", animation: DancingCircles },
  { title: "Circular Economy in Edinburgh  Report 2022", animation: CornerSticks },
]



export default function FeaturedProjects() {
  return <section id="featured-projects">
    <div id="title-sticker">
      <h2>Featured Projects</h2>
    </div>
    <div className="centered-column projects-list">
      {projects.map((project, index) => (
        <a className={`project-card`} key={`project-card-${index}`} href={""}>
          <div className="player-container">
            <Player autoplay loop src={project.animation} />
          </div>
          <Body className="project-title"> {project.title} </Body>
        </a>
      ))}
    </div>

  </section >
}
