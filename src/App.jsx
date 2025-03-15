import { ParallaxProvider } from 'react-scroll-parallax';
import './styles.css'
import Portfolio from './Portfolio';

export default function App() {

  return (
    <>
      {/* <Nav /> */}
        <div className='outer-wrapper'>
          <div className='wrapper'>
            <Portfolio />
          </div>
        </div>
    </>
  )
}

