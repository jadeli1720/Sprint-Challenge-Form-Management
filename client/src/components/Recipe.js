import React from 'react';

const Recipe = props => {
    console.log('Recipe',props)
    return(
        <div className>
            {props.data.name}
        </div>
    )
}

export default Recipe;