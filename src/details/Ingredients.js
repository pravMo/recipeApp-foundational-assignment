import React from 'react';
import './details.css'

const Ingredients = (props) => {

    const style = props.name.length === 0 ? null : 'list'

    return (
        <div className='det-flex-fix'>
            <li className={style}> {props.name} </li>
        </div>
    )
}

export default Ingredients;