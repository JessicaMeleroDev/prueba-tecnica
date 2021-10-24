import React from 'react';
import Description from './Description';
import Image from './Image';
import './Details.css';

const Details = () => {
    return (
        <div className="container-details">
            <Image />
            <div className="container-right">
                <Description />
                <div>
                    <p>Actions</p>
                </div>
            </div>
        </div>
    )
}

export default Details
