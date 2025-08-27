import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@shared/styles/index.css";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer";
import ProjectsList from "@/pages/projects/projects-list";


const ProjectsPage = () => (
	<>
		<Header />
		<main>
			<ProjectsList />
		</main>
		<Footer />
	</>
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ProjectsPage />
	</StrictMode>,
);
