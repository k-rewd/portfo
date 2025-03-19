// import { ParallaxProvider } from 'react-scroll-parallax';
import './styles.css'
import Portfolio from './Portfolio';
import Home from './sections/Home/Home';
import ProjectA from './sections/Projects/ProjectA';

export default function App() {

  return (
    <div className='container'>
      {/* <Nav /> */}
          <Home />
          <ProjectA />
    </div>
  )
}

