import  React  from 'react';
import PropTypes from 'prop-types';


function Piece(props) {
  return (
    <p>{props.type}</p>
  )
}

Piece.propTypes = {
  type: PropTypes.string.isRequired
}

export default Piece;