import "./FeaturedProjects.css";
import BeamingSticks from "@assets/lottie/beaming_sticks.json";
import CornerSticks from "@assets/lottie/corner_sticks.json";
import DancingCircles from "@assets/lottie/dancing_circles.json";
import Stones from "@assets/lottie/stones.json";
import Zigzags from "@assets/lottie/zigzags.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Body, PrimaryHeading } from "@/shared/components/typography";
import content from "@/content/main";
import { useLocation } from "preact-iso";

const animations = [Stones, BeamingSticks, Zigzags, DancingCircles, CornerSticks];
const projects = content.page.projects.list.map((project, index) => ({
  title: project.title,
  path: project.path,
  animation: animations[index % animations.length],
}));




export default function FeaturedProjects() {
  const location = useLocation();
  const onCardClick = (path: string) => {
    location.route(path);
  }

  return <section id="featured-projects">
    <div id="title-sticker">
      <PrimaryHeading>Featured Projects</PrimaryHeading>
    </div>
    <div className="centered-column projects-list">
      {projects.map((project, index) => (
        <button
          className="featured-project-card"
          key={`project-card-${index}`}
          onClick={() => location.route(project.path)}

        >
          <div className="player-container">
            <Player autoplay loop src={project.animation} />
          </div>
          <Body className="featured-project-title"> {project.title} </Body>
        </button>
      ))}
    </div>
  </section >
}
