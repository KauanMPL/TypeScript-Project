import React, { SyntheticEvent } from "react";
import DeletePortifolio from "../DeletePortifolio/DeletePortifolio";

interface Props {
  portfolioValue: string;
  onPortifolioDelete: (e: SyntheticEvent) => void;
}

const CardPortifolio = ({ portfolioValue, onPortifolioDelete }: Props) => {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <DeletePortifolio onPortifolioDelete={onPortifolioDelete} portifolioValue={portfolioValue}/>
    </>
  );
};

export default CardPortifolio;