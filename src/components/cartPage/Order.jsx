import React from 'react'
import "./button.css"

function Order() {
    const shipping = 50;
    return (
        <div>
            <div className="summaryMoh">
                <span className="orderMoh">Order Summary</span>
                <hr class="line2Moh"></hr>
                <div className="mainChargesMoh">
                    <span>2 Products</span>
                    <span className='tmoneyMoh'>17998/-</span></div>
                <div>
                    <div id='plusMoh'>+</div>
                    <div>
                        <span className="schargesMoh">Shipping Charges</span>
                        <span className='smoneyMoh'>{shipping}/-</span>
                        <hr className="line2Moh"></hr>
                    </div>
                    <div className="sumMoh">
                        <span id='sumMoh'> Total Charges</span>
                        <span className='fsumMoh'>18048/-</span>
                    </div>
                </div>
                <input type="checkbox" name="button" id="button"></input>
                <label class="checkout" for="button">Checkout</label>
            </div>
        </div>
    )
}

export default Order
