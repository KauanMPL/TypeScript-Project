import React from 'react';
import "./Card.css";
interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
    return (
        <div className='card'>
            <img src="https://picsum.photos/seed/picsum/200/300"
                alt="Image"
                 />
            <div className='details'>
                <h2>{companyName} ({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, vel officiis corrupti at accusamus optio. Officia vel, exercitationem fugit quaerat unde excepturi odit illo doloremque voluptatum b
                atae consequatur debitis id?
            </p>
        </div>
    )
}

export default Card;