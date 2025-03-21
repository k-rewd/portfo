import { Parallax } from "react-scroll-parallax";
import './styles.css'

export default function Portfolio() {
  return (
    <>
      <div className="parallax_wrapper">
        <div className="parallax_group intro_screen" id="intro">
        <h1>Section 1</h1>
          <div className="parallax_layer base_layer" >1base</div>
          <div className="parallax_layer mid_layer">1mid</div>
          <div className="parallax_layer top_layer">1top</div>

        </div>
        <div className="parallax_group" id="section-2">

          <h1>Section 2</h1>
          <div className="parallax_layer base_layer">2base</div>
          <div className="parallax_layer mid_layer">2mid</div>
          <div className="parallax_layer top_layer">2top</div>

        </div>
        <div className="parallax_group" id="section-3">

          <h1>Section 3</h1>
          <div className="parallax_layer base_layer">3base</div>
          <div className="parallax_layer mid_layer">3mid</div>
          <div className="parallax_layer top_layer">3top</div>

        </div>
        <div className="parallax_group outro_screen" id="outro">

          <h1>Outro</h1>

        </div>
      </div>
    </>
  );
};

