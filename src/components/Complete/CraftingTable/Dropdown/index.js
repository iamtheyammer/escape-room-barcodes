import React, { Component } from 'react';
import * as PropTypes from 'prop-types'


class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
    this.props.onChange((this.props.correctSolution.toLowerCase() === event.target.value.toLowerCase()), this.props.id);
  }

  render() {
    return (
      <div>
        <select size="5"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.props.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      </div>
    )
  }
}

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  correctSolution: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired
}

export default Dropdown
