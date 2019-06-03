import React, { Component } from 'react';

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  onKeyPress = (event) => {
    if(event.key === "Enter") {
      this.props.onSubmit(this.state.input);
      this.setState({
        input: ""
      });
    }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <input 
      type="text" 
      onKeyPress={this.onKeyPress} 
      onChange={this.handleChange} 
      value={this.state.input}/>
    )
  }
}

export default Scanner;