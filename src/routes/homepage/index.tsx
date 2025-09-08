import "./Homepage.css";

import Header from "@shared/components/header";
import Introduction from "@/routes/homepage/introduction";
import FeaturedProjects from "@/routes/homepage/featured-projects";
import Footer from "@/shared/components/footer";

function Homepage() {
  return (
    <>
      <Introduction />
      <FeaturedProjects />
    </>
  );
}

export default Homepage;
