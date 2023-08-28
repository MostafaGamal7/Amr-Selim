// import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ servIcn, servHeading, servDesc }) => {
    // const [showDetails, setShowDetails] = useState(false);

    // const toggleDetails = (e) => {
    //     e.preventDefault()
    //     setShowDetails(!showDetails);
    // };

    return (
        <div>
            <div className="serv-heading-wrapper">
                <FontAwesomeIcon icon={servIcn} />
                <h2>{servHeading}</h2>
            </div>
            <p>{servDesc}</p>
            {/* <a href="#" onClick={toggleDetails}>
                <span className='read-more'>Read More</span>
            </a> */}
            {/* {showDetails && <div className='service-details'>
                <p>Hi</p>
            </div>} */}
        </div>
    );
};

export default Service;
