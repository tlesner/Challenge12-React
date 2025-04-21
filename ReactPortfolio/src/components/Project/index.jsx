import {PropTypes} from 'prop-types'
import './Project.css';



export default function Project({name, gitHub, description, projClass}) {

    return (
        <div className={`project-container ${projClass}`}>
            <div>{name}</div>

            <a href={gitHub} target="_blank">Repo Link</a>

            <p>{description}</p>
        </div>
    )
}

Project.propTypes = { 
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projClass: PropTypes.string.isRequired,
 }