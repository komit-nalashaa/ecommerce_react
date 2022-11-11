import React from "react";
import {Header} from './Header';
import {Footer} from './Footer';
import { DetailPage } from "./DetailPage";

export function ProductDetails() {
    return ( 
    <div>
        <div className='App'> 
        <Header/>
        <DetailPage/>
        <Footer/>
        </div> 
    </div>
    )
}