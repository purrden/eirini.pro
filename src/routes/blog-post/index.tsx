import "./BlogPost.css";

import Header from "@shared/components/header";

import Footer from "@/shared/components/footer";
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
