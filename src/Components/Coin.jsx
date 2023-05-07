import React from 'react'

export default function Coin({ name, symbol, image, price }) {
    return (
        <>
            <div className="coincontainer">

                <div className="coin">
                    <img src={image} alt={name} />
                    <h1>{symbol}</h1>
                    <p>{name}</p>
                    <h3>₹{price}</h3>
                </div>
            </div>
        </>
    )
}
