import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './home.css'

export default function Home() {
  return (
    <section>
      <Parallax  speed={-100}>
          <h1>HOME</h1>
      </Parallax>
      <Parallax speed={-100}>
          <h1>HOME</h1>
      </Parallax>
      <Parallax speed={-100}>
          <h1>HOME</h1>
      </Parallax>
    </section>
    );
}


