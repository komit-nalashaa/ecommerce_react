import React from "react";

import AddCart from "./AddCart";


export class AdditionPage extends React.Component {
    constructor() {
        super();
        this.state = {
            clicks: 0,
            show: true
        };
    }


  IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
  }

  DecreaseItem = () => {
      if (this.state.clicks < 0) { this.setState ({clicks: 0});
      console.log("Negative Value is not allowed")
      window.alert("Negative Value is not allowed")
      }else {
        this.setState({clicks: this.state.clicks - 1 });
      }
  
    // this.setState({ clicks: this.state.clicks - 1 });
  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {


        return(
          <div className="addition-button col-md-12">
              <div className="update_qty col-md-6 ">
                  <button className="btn btn-default" onClick={this.IncrementItem}>+</button>
                  <input type="text" className="input-add" value={this.state.clicks}/> 
                  <button  className="btn btn-default" onClick={this.DecreaseItem}> - </button>
              </div>
               <div className="col-md-6"> 
               <AddCart/>
              </div> 
          </div>
        );
}}

export default AdditionPage ;
 