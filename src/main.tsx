import { createRoot } from 'preact/compat/client'
import './shared/styles/index.css'
import Homepage from './routes/homepage'
import { lazy, LocationProvider, ErrorBoundary, Router, Route, useLocation } from 'preact-iso';
import Footer from './shared/components/footer';
import Header from './shared/components/header';


const Projects = lazy(() => import('./routes/projects'));
const BlogPost = lazy(() => import('./routes/blog-post'));


function Layout({ children, hasBackButton }: { children: preact.ComponentChildren, hasBackButton?: boolean }) {
  if (hasBackButton) {
    console.log('Back button is enabled');
  }
  const location = useLocation();
  console.log('Current location:', location);

  return <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
}

// todo: add 404 route
// todo: try lazy loading for routes
const App = () => {
  return <>
    <LocationProvider scope="/app">
      <Layout>
        <ErrorBoundary>
          <Router>
            <Route path="/" component={() => <Homepage />} />
            <Route path="/projects" component={() => <Projects />} />
            <Route path="/post/:id" component={() => <BlogPost />} />
          </Router>
        </ErrorBoundary>
      </Layout>
    </LocationProvider >
  </>
}

createRoot(document.getElementById('root')!).render(<App />)
