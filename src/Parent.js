import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Child1UL from "./Child1-ul";
import Child2Form from "./Child2-form"

class Parent extends Component {
  state = {
    groceryList: [
      {
        id: uuidv4(),
        groceryItem: "steaks",
        acquired: false,
      },
      {
        id: uuidv4(),
        groceryItem: "pies",
        acquired: false,
      },
      {
        id: uuidv4(),
        groceryItem: "salad greens",
        acquired: false,
      },
    ],
    inputGroceryItem: "",
  };

  handleSubmitGrocery = (event) => {
    event.preventDefault();

    let newGroceryArray = [
        ...this.state.groceryList, 
        { id: uuidv4(), groceryItem: this.state.inputGroceryItem, isDone: false },
    ];

    this.setState({
        groceryList: newGroceryArray,
        inputGroceryItem: "",
    });
  };;

  handleOnChange = (event) => {
    this.setState({
      inputGroceryItem: event.target.value,
    });
  };

  handleDeleteByID = (id) => {
      console.log(id);
    let filteredGroceryList = this.state.groceryList.filter(
      (item) => item.id !== id
     );

     this.setState({
       groceryList: filteredGroceryList,
     });

  }

  handleIsDone = () => {

  }

  render() {
    return (
      <div className="parent-container">
        <Child2Form
          handleSubmitGrocery={this.handleSubmitGrocery}
          handleOnChange={this.handleOnChange}
          inputGroceryItem={this.state.inputGroceryItem}
        />

        <Child1UL
          groceryList={this.state.groceryList}
          handleDeleteByID={this.handleDeleteByID}
          handleIsDone={this.handleIsDone}
        />
      </div>
    );
  }
}

export default Parent;
