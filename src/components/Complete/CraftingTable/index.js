import React, { Component } from 'react';
import './index.css';
import Dropdown from './Dropdown';

let refIngredients = [
  {
    type: 'milk',
    quantity: 3
  },
  {
    type: 'sugar',
    quantity: 2
  },
  {
    type: 'egg',
    quantity: 1
  },
  {
    type: 'wheat',
    quantity: 3
  }
]

class CraftingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: refIngredients,
      solved: false,
      fields: [
        {
          id: 'milk1',
          solution: 'milk',
          solved: false
        },
        {
          id: 'milk2',
          solution: 'milk',
          solved: false
        },
        {
          id: 'milk3',
          solution: 'milk',
          solved: false
        },
        {
          id: 'sugar1',
          solution: 'sugar',
          solved: false
        },
        {
          id: 'egg1',
          solution: 'egg',
          solved: false
        },
        {
          id: 'sugar2',
          solution: 'sugar',
          solved: false
        },
        {
          id: 'wheat1',
          solution: 'wheat',
          solved: false
        },
        {
          id: 'wheat2',
          solution: 'wheat',
          solved: false
        },
        {
          id: 'wheat3',
          solution: 'wheat',
          solved: false
        }
      ]
    }
  }

  onChange = (isSolved, id) => {
    if(!isSolved) return;
    let newStateFields = this.state.fields.map((field) => {
      if(field.id !== id) return field;
      field.solved = field.id === id
      // field.solved = true;
      return field;
    });
    this.setState({
      fields: newStateFields,
      solved: this.state.fields.filter((field) => field.solved).length === this.state.fields.length
    });
    console.log(this.state.fields)
  }

  render() {
    if (this.state.solved) return <h1>
      <span role="img" aria-label="party_emojis">🎉🎉🎉</span> 
      You've escaped, congrats! 
      <span role="img" aria-label="party_emojis">🎉🎉🎉</span>
      </h1>
    return (
      <div className="grid">
        {
          this.state.fields.map((field) => (
            <div className="grid-element" key={field.id}>
              <Dropdown
                className="options"
                onChange={this.onChange}
                options={['----', 'Egg', 'Wheat', 'Milk', 'Sugar']}
                correctSolution={field.solution}
                id={field.id}
              />
            </div>
          ))
        }
      </div>
    )
  }
}

export default CraftingTable;