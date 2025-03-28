
import './ProjectA.css'
import ebdbsplash from '../../assets/ebdbsplash.gif'
import ebdbfull from '../../assets/ebdbfull.gif'
export default function ProjectA() {
  return (
    <>
      <div className="parallax_group" id="project-page">
        <div className="parallax_layer page_2-base_layer" >

          <div className="project-1 left" >
            <img src={ebdbsplash} alt="" className='img-left' />
          </div>
          <div className='project-1 right'>
            <img src={ebdbfull} alt="" className='img-right' />

          </div>
        </div>
        <div className="parallax_layer page_2-mid_layer">
          <div className='project-1 left'>
            <h2 className="project-title-1">EBDBBnB</h2>
            <h2 className="project-title-1">EBDBBnB</h2>
            <h2 className="project-title-1">EBDBBnB</h2>
            <div className='project-1-window-1'>
            </div>
          </div>
          <div className='project-1 right'>
            <div className="project-1-window-2">

            </div>
          </div>
        </div>
        <div className="parallax_layer page_2-top_layer">
          <div className='page-title-container'>
            <h1 className='page-title line-1'>PROJECT:</h1>
            <h1 className='page-title line-2'> EBDBBnB </h1>
          </div>
          <div className='project-1 left'>
            <h1 className="project-title">EBDBBnB</h1>

            <div className='window-filler' ></div>
          </div>
          <div className='project-1 right'>
            <div className="project-1-window-2">
            </div>
          </div>

        </div>

      </div>
    </>
  )
}