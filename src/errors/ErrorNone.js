import React from 'react';
import { Link } from 'react-router-dom';
import './errNone.css'

const ErrorNone = () => {
    return (
        <div className='err-center-screen'>
            <p className='err-subtitle'> Opps! Please search for a valid ingredient. </p>
            <Link to='/'><button className='err-search-button'> Try Again </button></Link>
        </div>
    )
}

export default ErrorNone;