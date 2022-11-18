import React from "react";
import AddCart from "./AddCart";

export class AdditionPage extends React.Component {
    constructor() {
        super();
        this.state = {
            clicks: 1,
            show: true
        };
    }

  IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
      if (this.state.clicks < 2) { this.setState ({clicks: 1});
      // window.alert("Please select at least one item")
      }else {
        this.setState({clicks: this.state.clicks - 1 });
      }
    }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
        return(
          <div className="addition-button col-md-12">
              <div className="update_qty col-md-6 ">
                  <button className="btn btn-default button_border" onClick={this.DecreaseItem}>-</button>
                  <input type="text" className="input-add" value={this.state.clicks}/> 
                  <button  className="btn btn-default button_border" onClick={this.IncrementItem}>+</button>
              </div>
               <div className="col-md-6"> 
               <AddCart/> 
              </div> 
          </div>
        );
}}

export default AdditionPage ;
 