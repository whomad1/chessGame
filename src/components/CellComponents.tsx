import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps{
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent:FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div 
            className={['cell', cell.color, selected ? "selected" : ''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.available && cell.piece ? 'yellow' : ''}} //TODO ЗАМЕНИТЬ INLINE СТИЛЬ
        >
            {cell.available && !cell.piece && <div className={"available"}/>}
            {cell.piece?.logo && <img src={cell.piece.logo} alt=''/>}
        </div>
    );
};

export default CellComponent;