import React, { SyntheticEvent } from "react";
import CardPortifolio from "../CardPortifolio/CardPortifolio";

interface Props {
  portfolioValue: string[];
  onPortifolioDelete: (e: SyntheticEvent) => void;
}

const ListPortifolio = ({ portfolioValue, onPortifolioDelete }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValue &&
          portfolioValue.map((portfolioValue) => (
            <CardPortifolio
              portfolioValue={portfolioValue}
              onPortifolioDelete={onPortifolioDelete}/>
          ))}
      </ul>
    </>
  );
};

export default ListPortifolio;