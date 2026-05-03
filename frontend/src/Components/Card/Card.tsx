import React from 'react';
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortifolio from '../Portifolio/AddPortifolio/AddPortifolio';
interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortifolioCreate: (e: React.SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortifolioCreate }: Props) => {
    return (
        <div className='card'>
            <img src="" alt="Company Logo" />

            <div className='details'>
                <h2>{searchResult.name} ({searchResult.symbol})</h2>
                <p>${searchResult.currency}</p>
            </div>
            <p className="info">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortifolio
                onPortifolioCreate={onPortifolioCreate}
                symbol={searchResult.symbol} />
        </div>
    )
}

export default Card;