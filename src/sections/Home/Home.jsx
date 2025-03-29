import Techstack from "../Techstack/Techstack";
import "./Home.css";
import cs from '../../assets/printstreamx.png'

export default function Home() {
  return (

    <div className="parallax_group" id='home'>
      {/* Section 1 */}
      {/* <h1>Section 1</h1> */}
      <div className="parallax_layer page_1-base_layer" >
        <Techstack />
        <div className="image-container"></div>
      </div>
      <div className="parallax_layer page_1-mid_layer" >
      </div>
      <div className="parallax_layer page_1-top_layer" >
        <div className="left-side"></div>
        <div className="right-side">
        <div className="intro-title">
          <span className="topline">
            <p>web</p>
            <p>/</p>
            <p>app</p>
            <p>development</p>
            <p>& </p>
            <p>design</p>
          </span>
          <h1>andrew</h1>
          </div>
        </div>
      </div>
        <div className="devlink-container">
          <img className="devlink" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          <img className="devlink" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
        </div>
    </div>
  )
}

{/* <div className="parallax_wrapper">
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
</div> */}