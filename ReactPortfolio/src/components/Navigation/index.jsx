import './Navigation.css'
// import About from '../../pages/About' 
import { Link } from 'react-router-dom'

export default function Navigation () {
    // const buttons = ['About Me', 'Porfolio','Contact', 'Resume']
    return(
        <div className='nav-container'>
            <ul className='nav-list'>
               {/* {buttons.map((button, index) => (
                    <li key={index} className="nav-item">{button}</li>
                )
               )} */}
                
               <Link to="/" className='nav-item'>About Me</Link>
               <Link to="/portfolio" className='nav-item'>Portfolio</Link>
               <Link to="/contact" className='nav-item'>Contact</Link>
               <Link to="/resume" className='nav-item'>Resume</Link>
            </ul>
        </div>
    )
}