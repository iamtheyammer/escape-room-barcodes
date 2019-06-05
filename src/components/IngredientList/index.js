import React from 'react';
import * as PropTypes from 'prop-types'
import Piece from '../Piece';
import "./index.css"

function IngredientList(props) {
  return (
    <div>
      <ul>
        {props.ingredients.map((ingredient) => {
          return (
            <div className="background" key={ingredient.barcode}>
              <li>
                <Piece type={ingredient.type} />
              </li>
            </div>
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