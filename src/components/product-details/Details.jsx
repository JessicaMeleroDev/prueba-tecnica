import React from 'react';
import Description from './Description';
import Image from './Image';
import Actions from './Actions';

import './Details.css';

const Details = () => {
    return (
        <div className="container-details">
            <Image />
            <div className="container-right">
                <Description />
                <Actions />
            </div>
        </div>
    )
}

export default Details
