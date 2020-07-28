import React from 'react';
import { Link } from 'react-router-dom';
import './na.css'
import './errNone.css'

const NA = () => {
    return (
        <div className='na'>
            <h1 className='na-content'> 404 </h1>
            <p className='err-subtitle'> Opps! Something went wrong, visit our home page below. </p>
            <Link to='/'><button className='err-search-button'> HOME </button></Link>
        </div>
    )
}

export default NA