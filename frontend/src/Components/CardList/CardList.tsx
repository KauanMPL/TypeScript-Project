import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import {v4 as uuidv4} from 'uuid';
interface Props {
  searchResults: CompanySearch[];
  onPortifolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({searchResults, onPortifolioCreate}: Props) => {
  return <>
  {searchResults.length > 0 ? (
    searchResults.map((result) => {
      return ( 
        <Card id={result.symbol} 
        key={uuidv4()} 
        searchResult={result} 
        onPortifolioCreate={onPortifolioCreate} />
      );
    })
  ) : (
    <h1>No Results</h1>
  )}</>
};

export default CardList