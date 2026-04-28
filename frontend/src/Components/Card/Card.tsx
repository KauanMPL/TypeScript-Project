import React from 'react';
import "./Card.css";
type Props = {};

const Card = (props: Props) => {
    return (
        <div className='card'>
            <img src="https://picsum.photos/seed/picsum/200/300"
                alt="Image" />
            <div className='details'>
                <h2>AAPL</h2>
                <p>$110</p>
            </div>
            <p className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, vel officiis corrupti at accusamus optio. Officia vel, exercitationem fugit quaerat unde excepturi odit illo doloremque voluptatum b
                atae consequatur debitis id?
            </p>
        </div>
    )
}

export default Card;