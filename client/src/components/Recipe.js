import React from 'react';

const Recipe = props => {
    return(
        <div className="card">
            {props.item.name}
            {props.item.course}
            {props.item.technique}
            <ul>Ingredients
            {props.item.ingredients.map(item => {
                return(<li> {item}</li>)
})}
            </ul>
        </div>
    )
}

export default Recipe;