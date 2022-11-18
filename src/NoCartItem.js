import React from "react";
import {Header} from './Header';
import {Footer} from './Footer';
import { DetailPage } from "./DetailPage";

export function NoCartItems() {
    return ( 
    <div>
        <div className='App'> 
        <Header/>
            <h1>There is no item in the cart. Please select at least one item.</h1>
        {/* <DetailPage/> */}
        <Footer/>
        </div> 
    </div>
    )
}