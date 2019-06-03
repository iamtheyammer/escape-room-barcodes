import React from 'react';
import Notifications, { notify } from 'react-notify-toast'
import './App.css';
import Scanner from '../Scanner'
import IngredientList from '../IngredientList';

let goals = [
  {
    id: 0,
    complete: false,
    barcode: "7906603465",
    type: "milk"
  },
  {
    id: 1,
    complete: false,
    barcode: "5392062314",
    type: "milk"
  },
  {
    id: 2,
    complete: false,
    barcode: "0638093149",
    type: "milk"
  },
  {
    id: 3,
    complete: false,
    barcode: "0000",
    type: "sugar"
  },
  {
    id: 4,
    complete: false,
    barcode: "5310771690",
    type: "egg"
  },
  {
    id: 5,
    complete: false,
    barcode: "9727424685",
    type: "sugar"
  },
  {
    id: 6,
    complete: false,
    barcode: "5626998489",
    type: "wheat"
  },
  {
    id: 7,
    complete: false,
    barcode: "9926315950",
    type: "wheat"
  },
  {
    id: 8,
    complete: false,
    barcode: "5889559461",
    type: "wheat"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statedGoals: goals,
      shouldClear: false
    }
  }

  handleSubmit = (input) => {
    let found = false;
    const newState = this.state.statedGoals.map((goal) => {
      if(goal.barcode !== input) return goal;
      if(goal.complete === true) {
        notify.show("You've already scanned that " + goal.type + ".", "error", 1500);
      } else {
        goal.complete = true;
        notify.show("Nice job finding that " + goal.type + "!", "success", 1500);
      }
      found = true;
      return goal;
    })
    this.setState({
      statedGoals: newState,
      shouldClear: true
    });
    if(found === false) notify.show("That's not a barcode in this game.", "warning", 1500);
  }

  render() {
    return (
      <div className="App">
        <Notifications />
        <IngredientList ingredients={this.state.statedGoals.filter((goal) => goal.complete === true)}/>
        <Scanner onSubmit={this.handleSubmit} shouldClear={this.state.shouldClear}></Scanner>
      </div>
    );
  }     
}
export default App;
