import "./Homepage.css";

import Header from "@shared/components/header";
import Introduction from "@pages/homepage/introduction";
import FeaturedProjects from "@pages/homepage/featured-projects";
import Footer from "@/shared/components/footer";

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
