import "@shared/styles/index.css";
import "./Projects.css";
import ProjectsList from "@/routes/projects/projects-list";
import BackButton from "@/shared/components/back-button";

export default function ProjectsPage() {
	return <div id="projects-page">
		<BackButton />
		<ProjectsList />
	</div>
}
