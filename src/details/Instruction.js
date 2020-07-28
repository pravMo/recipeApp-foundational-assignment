import React from 'react';
import './details.css'

const Instruction = (props) => {
    return (
        <div className='det-ins-words'>
            <p> {props.name} </p>
        </div>
    )
}

export default Instruction;