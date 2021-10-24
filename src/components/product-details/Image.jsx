import React from 'react'
import './Image.css'
const Image = ({url}) => {
    console.log(url);
    return (
        <div className="margin">
            <img
                src={url}
                alt="Producto"
                width="300"
                height="400"
            />
        </div>
    )
}

export default Image
