import "@shared/styles/index.css";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer";
import ProjectsList from "@/routes/projects/projects-list";


export default function ProjectsPage() {
	return <>
		<Header />
		<main>
			<ProjectsList />
		</main>
		<Footer />
	</>
}
