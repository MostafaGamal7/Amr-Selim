import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = ({ imgSrc, desc, projectLink }) => {
    return (
        <>
            <div>
                <img loading='lazy' src={imgSrc} alt="Project-Image" />
                <div className="overlay">
                    <p>{desc}</p>
                    <div className="project-link">
                        <a href={projectLink} target='_blank'><FontAwesomeIcon icon={faBehance} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
