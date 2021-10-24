import React from 'react';
import { useParams } from 'react-router-dom';

import Description from './Description';
import Image from './Image';
import Actions from './Actions';

import './Details.css';

const Details = () => {

    const {id} = useParams();

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
