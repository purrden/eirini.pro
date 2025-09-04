import "./FeaturedProjects.css";
import BeamingSticks from "@assets/lottie/beaming_sticks.json";
import CornerSticks from "@assets/lottie/corner_sticks.json";
import DancingCircles from "@assets/lottie/dancing_circles.json";
import Stones from "@assets/lottie/stones.json";
import Zigzags from "@assets/lottie/zigzags.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Body, PrimaryHeading } from "@/shared/components/typography";
import content from "@/content/main";

const animations = [Stones, BeamingSticks, Zigzags, DancingCircles, CornerSticks];
const projects = content.page.projects.list.map((project, index) => ({
  title: project.title,
  href: project.href,
  animation: animations[index % animations.length],
}));


export default function FeaturedProjects() {
  return <section id="featured-projects">
    <div id="title-sticker">
      <PrimaryHeading>Featured Projects</PrimaryHeading>
    </div>
    <div className="centered-column projects-list">
      {projects.map((project, index) => (
        <a className={`project-card`} key={`project-card-${index}`} href={project.href}>
          <div className="player-container">
            <Player autoplay loop src={project.animation} />
          </div>
          <Body className="project-title"> {project.title} </Body>
        </a>
      ))}
    </div>
  </section >
}
