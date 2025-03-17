// import { ParallaxProvider } from 'react-scroll-parallax';
import './styles.css'
import Portfolio from './Portfolio';
import Home from './sections/Home/Home';
import ProjectA from './sections/Projects/ProjectA';

export default function App() {

  return (
    <>
      {/* <Nav /> */}
      <div className='outer-wrapper'>
        <div className='wrapper'>
          <Home />
          <ProjectA />
        </div>
      </div>
    </>
  )
}

