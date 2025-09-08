import { createRoot } from 'preact/compat/client'
import './shared/styles/index.css'
import Homepage from './routes/homepage'
import { lazy, LocationProvider, ErrorBoundary, Router, Route, useLocation } from 'preact-iso';
import Footer from './shared/components/footer';
import Header from './shared/components/header';


const Projects = lazy(() => import('./routes/projects'));
const BlogPost = lazy(() => import('./routes/blog-post'));


function Layout({ children }: { children: preact.ComponentChildren }) {
  const location = useLocation();
  console.log('Current location:', location);

  return <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
}

const App = () => {
  return <>
    <LocationProvider scope="/app">
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Homepage} />
          <Route path="/projects" component={
            () => <Layout>
              <Projects />
            </Layout>}
          />
          <Route path="/post/:id/*" component={() => <Layout><BlogPost /></Layout>} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  </>
}

createRoot(document.getElementById('root')!).render(<App />)
