import './ProjectB.css'
import ebdbsplash from '../../assets/ebdbsplash.gif'
import ebdbfull from '../../assets/ebdbfull.gif'

export default function ProjectB() {

  return (
    <>
      <div className="parallax_group" id="project-2">

        <h1>Section 3</h1>
        
        {/* BOTTOM LAYER */}
        <div className="parallax_layer page_3-base_layer">
          <div className="project_2 left">
            <img src={ebdbsplash} className="project_2 img-1" />
          </div>
          <div className="project_2 right">

            <img src={ebdbfull} className="project_2 img-2" />
          </div>
        </div>

        {/* MID LAYER */}
        <div className="parallax_layer page_3-mid_layer">
          <div className="project_2 left">
            <div className="project_2 window-1"></div>
          </div>
          <div className="project_2 right">
            <div className="project_2 window-2"></div>
          </div>
        </div>

        {/* TOP LAYER */}
        <div className="parallax_layer page_3-top_layer">
        <div className="project_2 left">
          <div className="project_2 window-1-top"></div>
        </div>
        <div className="project_2 right">
          <div className="project_2 window-2-top"></div>
        </div>
        </div>

      </div>
    </>
  )
}