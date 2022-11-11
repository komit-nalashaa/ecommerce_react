import React from "react";

export function DetailPage() {
    return ( 
    <div className="col-md-12 content-detail">
        <div className="col-md-4 ">
            <div className="img-div">
                <img src="https://img.theorganicworld.com/ORG-0/img/product/3223/9957_1.jpg?s=180x180"></img>
            </div>
        </div>
        <div className="col-md-5 product-data text-left">
            <div className="sellers"> Best Sellers </div>
            <h2 className="text-left">Mango - <span>500 ML</span></h2>
            <div className="font-11 color-green text-left"><a> Organic </a> Cutfruits, Fruits, Vegetables, Organic Fruits,Cauliflower Florets</div>
            <div className="font-11 text-left">1.0  <span>1ratings</span></div>
            <h6>MRP </h6>
            <h5>$105.00</h5>
        </div>
        <div className="col-md-3">
        </div>
    </div>
    )
}