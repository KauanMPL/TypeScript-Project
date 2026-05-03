import React from "react";
import CardPortifolio from "../CardPortifolio/CardPortifolio";

interface Props {
  portfolioValues: string[];
}

const ListPortifolio = ({ portfolioValues }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => (
            <CardPortifolio key={portfolioValue} portfolioValues={portfolioValue} />
          ))}
      </ul>
    </>
  );
};

export default ListPortifolio;