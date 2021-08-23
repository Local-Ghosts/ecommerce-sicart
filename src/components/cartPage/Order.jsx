import React from 'react'

function Order() {
    const shipping = 50;
    return (
        <div>
            <div className="summary">
                <span className="order">Order Summary</span>
                <hr class="line2"></hr>
                <div className="mainCharges">
                    <span>2 Products</span>
                    <span className='tmoney'>17998/-</span></div>
                <div>
                    <div id='plus'>+</div>
                    <div>
                        <span className="scharges">Shipping Charges</span>
                        <span className='smoney'>{shipping}/-</span>
                        <hr className="line2"></hr>
                    </div>
                    <div className="sum">
                        <span id='sum'> Total Charges</span>
                        <span className='fsum'>18048/-</span>
                    </div>
                </div>
                <button className='checkout'>Checkout</button>
            </div>
        </div>
    )
}

export default Order
