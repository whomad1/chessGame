import { Color } from "../Color";
import { Piece, PieceNames } from "./Piece";
import { Cell } from "../Cell";
import blackLogo from '../../assets/black-bishop.png';
import whiteLogo from '../../assets/white-bishop.png';

export class Bishop extends Piece {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = PieceNames.BISHOP;
    }
}