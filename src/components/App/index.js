import React from 'react';
import Notifications, { notify } from 'react-notify-toast'
import './App.css';
import Scanner from '../Scanner'
import IngredientList from '../IngredientList';
import Complete from '../Complete';

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
    barcode: "3195047930",
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
    barcode: "5392062314",
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
    barcode: "0054532206",
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
      shouldClear: false,
      complete: false
    }
    this.textInput = React.createRef();
  }

  handleSubmit = (input) => {
    let found = false;
    if(input === "9983103450") {
      this.setState(({complete: true}));
      return;
    }
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
      shouldClear: true,
      complete: (newState.filter((goal) => goal.complete).length === newState.length)
    });
    if(found === false) notify.show("That's not a barcode in this game.", "warning", 1500);
  }

  focusInput = () => {
    // console.log(this.textInput)
    this.textInput.current.focusTextInput();
  }

  render() {
    if(this.state.complete === true) {
      return <Complete />;
    }
    return (
      <div className="App">
        <Notifications />
        <h1>Escape!</h1>
        <p>Scan barcodes to unlock things. So far, you've unlocked:</p>
        <button onClick={this.focusInput}>Barcode reader not working? Click here then try again.</button>
        <IngredientList  ingredients={this.state.statedGoals.filter((goal) => goal.complete === true)}/>
        <Scanner ref={this.textInput} onSubmit={this.handleSubmit} shouldClear={this.state.shouldClear}></Scanner>
      </div>
    );
  }     
}
export default App;
