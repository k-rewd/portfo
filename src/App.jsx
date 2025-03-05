import Home from './sections/Home/home.jsx'
import Nav from './sections/Nav/nav.jsx'
import Project from './sections/Project/project.jsx'
import './styles.css'

export default function App() {

  return (
    <>
      {/* <Nav /> */}
      <body>
        <div className='outer-wrapper'>
          <div className='wrapper'>
            <Home />
            <Project />
          </div>
        </div>
      </body>
    </>
  )
}

