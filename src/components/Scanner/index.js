import React, { Component } from 'react';
import "./index.css"

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.textInput = React.createRef();
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

  focusTextInput = () => {
    this.textInput.current.focus();
  }

  render() {
    return (
      <input 
      type="text" 
      onKeyPress={this.onKeyPress} 
      onChange={this.handleChange} 
      value={this.state.input}
      ref={this.textInput}
      autoFocus
      />
    )
  }
}

export default Scanner;