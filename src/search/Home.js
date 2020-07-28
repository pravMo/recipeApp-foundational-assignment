import React from 'react';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

    return (
        <div className='center-screen'>
            <h2 className='home-title'>RECIPES</h2>
            <p className='home-subtitle'>
                Enter an ingredient to begin your search for amazing recipes!
                    </p>
            <div className='input-box'>
                <form method='POST' action='http://localhost:3002/search'>
                    <input type='text' placeholder='Ingredient Name' name='query' className='input' />
                    <button className='search-button'> <FontAwesomeIcon icon="search" className="searchBut" /> </button>
                </form>
            </div>
        </div>
    )
}

export default Home;