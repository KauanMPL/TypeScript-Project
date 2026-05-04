import React, { SyntheticEvent } from "react";

interface Props {
    onPortifolioDelete: (e: SyntheticEvent) => void;
    portifolioValue: string;
}

const DeletePortifolio = ({onPortifolioDelete, portifolioValue}: Props) => {
  return <div>
    <form onSubmit={onPortifolioDelete}>
        <input hidden={true} value={portifolioValue} />
        <button>X</button>
    </form>
  </div>;
};

export default DeletePortifolio;