import React, { useState } from 'react'

function ItemCard(props) {

    const [quant, setQuant] = useState(1);
    const [amount, setAmount] = useState(8999);

    const decrease = () => {
        if (quant > 1) {
            setQuant(quant - 1);
            setAmount((quant - 1) * 8999);
        }
    }
    const increase = () => {
        setQuant(quant + 1);
        setAmount((quant + 1) * 8999);
    }

    return (
        <div>
            <div className="itmdet">
                <img src="https://static.langimg.com/thumb/msid-82028507,imgsize-63684,width-700,height-525,resizemode-75/navbharat-times.jpg" alt="" width="80" height="100" />
                <span className="data">
                    <span className="desc">Puma Shoes</span>
                    <span className="quant">
                        <button className="qbtn" id="dec" onClick={() => {
                            decrease()
                            props.setTotal(quant)
                            console.log(props.totalamnt);
                        }}>-</button>
                        {quant}
                        <button className="qbtn" id="inc" onClick={() => {
                            increase()
                            props.setTotal(quant)
                            console.log(props.totalamnt);
                        }}>+</button>

                    </span>
                    <span className="itPrice">{amount}/-</span>
                    <button id="trash" 
                        // onClick={() => {
                        //     const newState = state.filter((el, i) => i !== index);
                        //     setState(newState);
                        // }}
                    >
                        <i className="fa fa-trash"></i>
                        </button>
                </span>
            </div>
            <hr className="line1"></hr>

        </div>
    )
}

export default ItemCard
