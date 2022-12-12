import { Color } from "../Color";
import { Piece, PieceNames } from "./Piece";
import { Cell } from "../Cell";
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';

export class Pawn extends Piece {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = PieceNames.PAWN;
    }
}