import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MapSearch from './MapSearch';
import './search.css'
import Loader from '../search/Loader';

const Search = () => {

    const [state, setState] = useState({
        hits: null,
        mealName: '',
        loading: true
    })

    useEffect(() => {
        fetch('http://localhost:3002/ingredient-search')
            .then(res => res.json())
            .then(data => {
                setState(pre => ({
                    ...pre,
                    hits: data.data.meals,
                    loading: false
                }))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleClick = (meal) => {
        setState(pre => ({
            ...pre,
            mealName: meal.strMeal
        }))
    }

    const invalidSearch = (
        <div>
            <p> Please Search for a valid ingredient </p>
            <Link to='/'><button> Try Again </button></Link>
        </div>
    )

    const validSearch = (
        state.hits === null ? invalidSearch :
            <div>
                <Link to='/'><button className='se-home-button'> Home </button></Link>
                <p className='se-p'> Click on a dish name to learn more! </p>
            </div>
    )

    const load = (
        state.loading === true ? <Loader /> : validSearch
    )

    const results = state.hits === null ? null : state.hits.map((params) => {
        return (
            <MapSearch
                key={params.idMeal}
                meals={params.strMeal}
                image={params.strMealThumb}
                clicked={() => handleClick(params)}
            />
        )
    })

    const redirecting = state.mealName !== '' ? <Redirect to={`/mealDetails/${state.mealName}`} /> : null

    return (
        <div className='se-center-screen'>
            <div className='se-home-back'>
                <ul>
                    <li> {load} </li>
                </ul>
            </div>
            <div className='se-content-back'>
                <ul className='se-content-list'>
                    {results}
                </ul>
            </div>
            {redirecting}
        </div>
    )
}

export default Search;