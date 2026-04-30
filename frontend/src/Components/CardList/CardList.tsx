import React from 'react';
import Card from '../Card/Card';

const CardList = () => {
    return (
        <div>
            <Card companyName="Apple Inc." ticker="AAPL" price={150} />
            <Card companyName="Microsoft" ticker="MSFT" price={250} />
            <Card companyName="Tesla" ticker="TESLA" price={280} />
        </div>
    );
};

export default CardList;