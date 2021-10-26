import React from 'react'

const EmptySearch = () => {

    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}>
            <p>La búsqueda no ha encontrado datos</p>
        </div>
    )
}

export default EmptySearch;
