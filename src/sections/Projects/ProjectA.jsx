
import './ProjectA.css'

export default function ProjectA() {
  return (
<>
    <div className="parallax_group" id="project-page">
      <div className="parallax_layer page_2-base_layer" >2base</div>
      <div className="parallax_layer page_2-mid_layer">2mid</div>
      <div className="parallax_layer page_2-top_layer">
        {/* <h1>Projects</h1> */}
        <div className='project-1 left'>
          <div className='project-1-window-1'>
            hello
          </div>
        </div>
        <div className='project-1 right'>
          <div className="project-1-window-2">
            goodbye
          </div>
        </div>

      </div>

    </div>
    </>
  )
}