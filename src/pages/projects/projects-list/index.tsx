import { useEffect, useState } from "react";
import "./ProjectsList.css";
import { Body, SecondaryHeading } from "@/shared/components/typography";
import debug from "@/assets/snippets/debug";
import { historyBackWFallback } from "@/assets/snippets/navigation";

type ErrorKind = "fetch" | "parse" | "unknown";

const URL = {
  PROJECTS: "/posts/index.json",
  SINGLE_POST: (id: string) => `/posts/${id}/index.json`,
}

class PostsError extends Error {
  public kind: ErrorKind;
  constructor(kind: ErrorKind, message: string,) {
    super(message);
    this.name = "PostsError";
    this.kind = kind;
  }
}

type ProjectId = string;
type Project = {
  id: ProjectId;
  title: string;
  subtitle?: string;
  content: string;
  images: string[];
  thumbnail?: string;
}

function useProjects(): [Project[], PostsError | null] {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<PostsError | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const postsIds: ProjectId[] = (await (await fetch(URL.PROJECTS)).json().catch(e => {
        debug({
          kind: "data_fetch",
          outcome: "failure",
          message: "Failed to fetch project list",
          url: URL.PROJECTS,
          error: e,
        });
        setError(new PostsError("fetch", "Failed to fetch projects list"));
        return [];
      })).posts || [];

      debug({
        kind: "data_fetch",
        outcome: "success",
        message: "Fetched projects list",
        url: URL.PROJECTS,
      });

      const posts = await Promise.all(postsIds
        .map(async id => {
          const url = URL.SINGLE_POST(id);
          const data = await fetch(url).catch(e => {
            debug({
              kind: "data_fetch",
              outcome: "failure",
              message: `Failed to fetch project ${id}`,
              url: url,
              error: e,
            });
          })

          if (!data) {
            return null;
          }

          debug({
            kind: "data_fetch",
            outcome: "success",
            message: `Got raw data for project ${id}`,
            url: url,
          });

          const post: Project | null = await data?.json().catch(e => {
            debug({
              kind: "data_fetch",
              outcome: "failure",
              message: `Failed to parse project ${id} data`,
              url: url,
              error: e,
            });
            return null;
          });

          if (!post) {
            return null;
          }

          debug({
            kind: "data_fetch",
            outcome: "success",
            url: url,
            message: `Parsed project ${id} data`,
          });

          return post;
        })
      )


      console.log('All projects fetched:', posts);
      return posts.filter(p => p !== null) as Project[];
    }
    fetchProjects().then(projects => {
      console.log("Projects state updated:", projects);
      setProjects(projects);
    })
  }, []);

  return [projects, error];
}

export default function ProjectsList() {
  const [projects, error] = useProjects();

  if (error) {
    return <Body>{error.message}</Body>;
  }

  if (projects.length === 0) {
    return <Body>No projects found.</Body>;
  }

  return (
    <section id="projects-list">
      <div className="centered-column">
        <button onClick={historyBackWFallback} className="back-button">Back</button>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img className="thumbnail" src={project.thumbnail} alt={project.title} />
              <SecondaryHeading className="project-title">{project.title}</SecondaryHeading>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
