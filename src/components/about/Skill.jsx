import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Skill = ({ skillHeading, skillDesc }) => {
    return (
        <div>
            <div className="skill-top">
                <FontAwesomeIcon icon={faCheck} />
                <h2>{skillHeading}</h2>
            </div>
            <div className="skill-body"><p>{skillDesc}</p></div>
        </div>
    )
}

export default Skill
