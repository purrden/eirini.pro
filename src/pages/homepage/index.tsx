import "./Homepage.css";

import Header from "@shared/components/header";
import Introduction from "@pages/homepage/introduction";
import FeaturedProjects from "@pages/homepage/featured-projects";

function Homepage() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <FeaturedProjects />
      </main>
    </div>
  );
}

export default Homepage;
