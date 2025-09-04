import "./Homepage.css";

import Header from "@shared/components/header";
import Introduction from "@/routes/homepage/introduction";
import FeaturedProjects from "@/routes/homepage/featured-projects";
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
