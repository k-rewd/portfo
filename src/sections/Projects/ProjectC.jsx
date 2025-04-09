import './ProjectC.css'

export default function ProjectC() {

  return (
    <>
      <div className="parallax_group" id="section-3">

        <h1>Section 3</h1>
        <div className="parallax_layer base_layer">3base</div>
        <div className="parallax_layer mid_layer">
          <div className="project_3 window-1"></div>
          <div className="project_3 window-2"></div>
        </div>
        <div className="parallax_layer top_layer">3top</div>

      </div>
    </>
  )
}