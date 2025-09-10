import "./Homepage.css";

import Introduction from "@/routes/homepage/introduction";
import FeaturedProjects from "@/routes/homepage/featured-projects";

function Homepage() {
  return (
    <>
      <Introduction />
      <FeaturedProjects />
    </>
  );
}

export default Homepage;
