import React from "react";
import './Addition'
import { useDispatch, useSelector } from "react-redux";
import { CartItems } from "./CartItems";
import { NoCartItems } from "./NoCartItem";
import { useNavigate } from 'react-router-dom';


export function Title() {

    const dispatcher = useDispatch();
    const {value} = useSelector((state)=>(state.counterSlice));
    const navigate = useNavigate();

        const cartitemcount = (e) => {
            e.preventDefault();
            if(value===0){
                return (
                    navigate('/no_items')
                )
            } else {
                return(
                    navigate('/cart_items')
                ) 
            }
        }
     
    return (
        <div className="Title"> 
            <div className="col-md-6">
                <img src = "https://img.theorganicworld.com/ORG-0/img/org/0/logo.png"/>
                <input type="text" className="searchtag" placeholder="Search for products, brands and more... " ></input>
            </div>   
            <div className="col-md-6 list_items">
                <ul className="list-item">
                    <li className="cart-icon">
                        <a className="loginanchor"title="Login" href="product_details" >
                            <i className="fa fa-user-plus loginicon"></i>
                            <span> Log In</span>
                        </a>
                    </li>
                    <li className="cart-icon">
                        <a title="Sign Up" href="/" className="loginanchor">
                            <i className="fa fa-user-plus loginicon"></i>
                            <span> Sign Up</span>
                        </a>
                    </li>
                    <li className="cart-icon">
                        <a href= "cart_items" title="Cart" className="loginanchor" onClick={cartitemcount}>
                            <i className="fa fa-shopping-cart"></i>
                            <span className="dot" id="cartitemcount">{value}</span>
                        </a>
                    </li>
                </ul>
            </div> 

            <h1> Hello React Title. </h1>
            <div className="Title-Subtitle"> It is owned by public space. </div>
        </div>
    )
}

