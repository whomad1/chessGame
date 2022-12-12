import { Color } from "../Color";
import { Piece, PieceNames } from "./Piece";
import { Cell } from "../Cell";
import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';

export class Queen extends Piece { 
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = PieceNames.QUEEN;
    }
}