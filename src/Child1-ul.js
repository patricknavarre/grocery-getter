import React from "react";
import "./Parent.css"

function Child1UL(props) {
  return (
    <ul>
      {props.groceryList.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li>{item.groceryItem}</li>{" "}
            <button
              className="btn btn-warning button-style"
              onClick={() => props.handleIsDone(item.id)}
            >
              {" "}
              DONE
            </button>
            <button
              className="btn btn-danger button-style"
              onClick={() => props.handleDeleteByID(item.id)}
            >
              Delete
            </button>
            

            <form> 
            
            <input type="checkbox" id="grocery" name="testing" value="test">
            
              
            </input>
            
            </form>

          
            <br />




          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default Child1UL;
