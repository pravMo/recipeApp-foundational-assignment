import React from 'react';
import './search.css'

const MapSearch = (props) => {
    return (
        <li className='se-content-list-item'>
            <div className='se-list-content'>
                <p> <img src={props.image} alt={props.meal} className='se-img'/> 
                <button onClick={props.clicked} className='se-map-button'> {props.meals} </button> </p>
            </div>
        </li>
    )
}

export default MapSearch;