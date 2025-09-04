import { createRoot } from 'preact/compat/client'
import './shared/styles/index.css'
import Homepage from './routes/homepage'
import { lazy, LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso';


const Projects = lazy(() => import('./routes/projects'));
const BlogPost = lazy(() => import('./routes/blog-post'));

const App = () => {
  return <>
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/post/:slug" component={BlogPost} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  </>
}

createRoot(document.getElementById('root')!).render(<App />)
