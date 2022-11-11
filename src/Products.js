import React from "react";
import'./App.css';

import { productData } from "./data";
import { AdditionPage } from './Addition'


export const Products = (props) => {
    const users=productData.map((data,id)=>{
        return <div className="product-content" key={id}>
            <div className="card">
                <div className="sellers"> Best Sellers </div>
                <a href="product_details"><img src={data.img_url} /> </a>
            
                <div className="text-left">
                    <div className="font-11 col-md-12 color-green"><a> Organic</a></div>
                    <h6 className="font-12"> {data.Title}</h6>
                    <h6 className="font-12">MRP {data.Price}</h6>
                </div>
                <div className="allcontent">
                    <div className="prodctprice"> {data.Price}</div>
                    <select className="col-md-12" name="quantiy" id="item-select">
                        <option value="fivegm">500 GM</option>
                        <option value="thgm">1 KG</option> 
                    </select>
                    <AdditionPage/>
                </div>
            </div>
        </div>
    })

    return (
        <>
        <div>                
            <section>
                <nav>
                    <ul className="anchor_list">
                        <li><a href="#">Fruits and Vegetables</a></li>
                        <li><a href="#">Organic Fruits</a></li>
                        <li><a href="#">Organic Greens</a></li>
                        <li><a href="#">Organic Vegetables</a></li>
                        <li><a href="#">Cut Fruits and Vegetables</a></li>
                    </ul>
                </nav>
                <article>
                    <div className="row">
                        {users}
                    </div>
                </article>
            </section>
        </div>
        </>
    );   
};
