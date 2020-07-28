import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import MealDetailsMain from './MealDetailsMain';
import Measure from './Measure';
import Instruction from './Instruction';
import './details.css'

class Details extends React.Component {
    scroll = createRef()
    constructor(props) {
        super(props);
        this.state = {
            recipeName: null,
            measure: null,
            ingre: null,
            ins: null
        }
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.name}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    recipeName: data.meals
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    viewDetails = (meal) => {
        let measureRes = Object.keys(meal).reduce((result, key) => {
            if (key.includes('strMeasure')) {
                result[key] = meal[key];
            }
            return result;
        }, {});

        let ingreRes = Object.keys(meal).reduce((result, key) => {
            if (key.includes('strIngredient')) {
                result[key] = meal[key];
            }
            return result;
        }, {});

        let instruRes = Object.keys(meal).reduce((result, key) => {
            if (key.includes('strInstructions')) {
                result[key] = meal[key];
            }
            return result;
        }, {});

        this.setState({
            measure: measureRes,
            ingre: ingreRes,
            ins: instruRes,
        })
    }

    componentDidUpdate() {
        this.handleClick();
    }

    handleClick = () => {
        this.scroll.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    render() {

        const detMainResults = this.state.recipeName === null ? null
            : this.state.recipeName.map((params) => {
                return (
                    <MealDetailsMain
                        key={params.idMeal}
                        name={params.strMeal}
                        image={params.strMealThumb}
                        video={params.strYoutube}
                        area={params.strArea}
                        link={params.strSource}
                        category={params.strCategory}
                        alt={params.strDrinkAlternate}
                        clicked={() => { this.viewDetails(params); this.handleClick() }}
                    />
                )
            })

        const detMeasure = this.state.measure === null ? null
            : Object.values(this.state.measure).map((params, index) => {
                return (
                    <Measure
                        key={index}
                        name={params}
                    />
                )
            })

        const detIngre = this.state.ingre === null ? null
            : Object.values(this.state.ingre).map((params, index) => {
                return (
                    <Ingredients
                        key={index}
                        name={params}
                    />
                )
            })

        const detIns = this.state.ins === null ? null
            : Object.values(this.state.ins)[0].split("STEP").map((params, index) => {
                return (
                    <Instruction
                        key={index}
                        name={params}
                    />
                )
            })

        const titleIns = this.state.ins === null ? null
            : <div className='det-ins-title'> - Instructions </div>

        const titleIngre = this.state.ins === null ? null
            : <div className='det-title-ing'> - Ingredients </div>

        const insBox = this.state.ins === null ? null : 'det-ins-box'
        const ingBox = this.state.ins === null ? null : 'det-ing-box'

        return (
            <div className='det-center-screen'>
                <div className='det-home-back'>
                    <Link to='/'><button className='det-home-button'> Home </button></Link>
                </div>
                <div className='de-content-back'>
                    <ul>
                        {detMainResults}
                    </ul>
                </div>

                <div className='det-box'>
                    <div className='det-box-stuff' ref={this.scroll}>
                        {titleIns}
                        <div className={insBox}>
                            {detIns}
                        </div>
                        {titleIngre}
                        <div className={ingBox}>
                            <div className='det-flex'>
                                <div> {detIngre} </div>
                                <div> {detMeasure} </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Details;