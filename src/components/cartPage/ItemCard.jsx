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
            <div className="itmdetMoh">
                <img class="imgMoh" src="https://static.langimg.com/thumb/msid-82028507,imgsize-63684,width-700,height-525,resizemode-75/navbharat-times.jpg" alt="" width="150" height="150" />
                <span className="dataMoh">
                    <span className="descMoh">Puma Shoes</span>
                    <span className="data quantMoh">
                        <button className="qbtnMoh" id="decMoh" onClick={() => {
                            decrease()
                            props.setTotal(quant)
                            console.log(props.totalamnt);
                        }}>-</button>
                        {quant}
                        <button className="qbtnMoh" id="incMoh" onClick={() => {
                            increase()
                            props.setTotal(quant)
                            console.log(props.totalamnt);
                        }}>+</button>

                    </span>
                    <span className="data itPriceMoh">{amount}/-</span>
                    <button id="trashMoh" 
                        // onClick={() => {
                        //     const newState = state.filter((el, i) => i !== index);
                        //     setState(newState);
                        // }}
                    >
                        <i className="fa fa-trash"></i>
                        </button>
                </span>
            </div>
            <hr className="line1Moh"></hr>

        </div>
    )
}

export default ItemCard
