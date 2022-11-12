import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { incrementcartAction } from "./redux/actions/counter.action";

export function AddCart() {
  const {value} = useSelector((state)=>(state.counterSlice));
  const dispatcher = useDispatch();
        return(
                <button type="button" className="sellers add-btn" onClick={()=>dispatcher(incrementcartAction(value))}> Add </button>
        );
}
export default AddCart ;
 