import React from 'react';
import './details.css'

const MealDetailsMain = (props) => {

    const alt = props.alt === null ? "No Drink Alternative" : props.alt
    const link = props.link === '' ? "No Link Provided" : null
    const video = props.video === '' ? "No Video Instructions" : null

    const style = {
        'fontWeight': 'bold'
    }

    return (
        <div className='det-content-list-item'>
            <div className='container'>
                <li> <img src={props.image} alt={props.name} className='det-img' /> </li>
                <div className='overlay'> </div>
                <div> <button onClick={props.clicked} className='det-button' > Click to View </button> </div>
            </div>
            <div className='det-list-content'>
                <li className='det-list-title'> {props.name} </li>
                <div className='det-list-title-rest'>
                    <li> <span style={style}>Category: </span> {props.category} </li>
                    <li> <span style={style}>Cusine: </span>{props.area} </li>
                    <li> <span style={style}>Drink: </span> {alt} </li>
                    <li> <span style={style}>External Link: </span>Visit this <a href={props.link} target="_blank" rel="noopener noreferrer"> site</a> to learn more.  {link} </li>
                    <li> <span style={style}>Video Instructions: </span> View this <a href={props.video} target="_blank" rel="noopener noreferrer"> site</a> to see how it's made! {video} </li>
                    <li> <span style={style}> Instructions: </span> Click on the image to view detailed instructions. </li>
                </div>
            </div>
        </div>
    )
}

export default MealDetailsMain
