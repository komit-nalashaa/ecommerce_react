import React from "react";
import {Header} from './Header';
import {Footer} from './Footer';
import { DetailPage } from "./DetailPage";

export function CartItems() {
    return ( 
    <div>
        <div className='App'> 
        <Header/>
            <h1>Here is the items of cart which you have selected.</h1>
        <DetailPage/>
        <Footer/>
        </div> 
    </div>
    )
}