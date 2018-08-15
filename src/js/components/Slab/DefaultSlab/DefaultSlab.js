import React from 'react'

import './default-slab.scss';

const DefaultSlab = (props) => {
    return (
        <div className="slab" onClick={props.onCheck}>
            { props.children }
        </div>
    )
}

export default DefaultSlab;