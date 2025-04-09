
import './ProjectA.css'
import { useEffect, useRef } from 'react';
import ebdbsplash from '../../assets/ebdbsplash.gif'
import ebdbfull from '../../assets/ebdbfull.gif'
import geniusplash from '../../assets/geniusplash.gif'
import ingenius from '../../assets/ingenius.gif'
export default function ProjectA() {


  return (
    <>
      <div className="parallax_group" id="project-page">
        <div className="parallax_layer page_2-base_layer" >

          <div className="project-1 left" >
            <div className='textbox'></div>
            <div className='project-1-window-1'>
              <img src={geniusplash} alt="" className='img-left' />
            </div>
          </div>
          <div className='project-1 right'>
            <img src={ingenius} alt="" className='img-right' />

          </div>
        </div>
        <div className="parallax_layer page_2-mid_layer">
          <div className='project-1 left'>
            <div className='textbox'>
              {/* <h2 className="project-title-1">INGENIUS</h2>
            <h2 className="project-title-1">INGENIUS</h2>
            <h2 className="project-title-1">INGENIUS</h2> */}
            </div>
            <div className='project-1-window-1 image-window'>
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
            <h1 className='page-title line-2'> INGENIUS </h1>
          </div>
          <div className='project-1 left'>
            <div className='textbox top-layer' >
              <h1 className="project-title">INGENIUS</h1>
              <p className='project-description'>
                is an application for annotating text online, allowing users to analyze
                and annotate texts from songs, literature, historical documents,
                and web content.
              </p>
            </div>
            <div className='project-1-window-1'>
            </div>
          </div>
          <div className='project-1 right'>
            <div className="project-1-window-2"></div>
            <div className="proj-tech-stack">
              JavaScript, Python, HTML5, CSS3 | React/Redux, Flask, PostgreSQL, Git, MySQL, SQLAlchemy
            </div>
          </div>
        </div>

      </div>
    </>
  )
}