import React, { SyntheticEvent } from 'react'

interface Props {
  onPortifolioDelete: (e: SyntheticEvent) => void;
  portifolioValue: string;
}

const DeletePortifolio = ({ onPortifolioDelete, portifolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortifolioDelete}>
        <input hidden={true} value={portifolioValue} readOnly />
       <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </div>
  )
}

export default DeletePortifolio