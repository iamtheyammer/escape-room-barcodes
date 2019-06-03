import React from 'react';
import * as PropTypes from 'prop-types'
import Piece from '../Piece';

function IngredientList(props) {
  return (
    <div>
      <ul>
        {props.ingredients.map((ingredient) => {
          return (
            <li>
              <Piece type={ingredient.type} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.string.isRequired}))
}

export default IngredientList;