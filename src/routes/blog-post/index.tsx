import "./BlogPost.css";
import { useLocation } from "preact-iso";

function BlogPost() {
  const location = useLocation();
  console.log("Current location BLOG:", location);
  return (
    <div className="centered-column blog-post-container">
      <h1>Blog Post Title</h1>
      <p>This is a sample blog post content.</p>
    </div>
  );
}

export default BlogPost;
