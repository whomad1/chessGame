import { Color } from "../Color";
import logo from '../../assets/black-king.png'
import { Cell } from "../Cell";

export enum PieceNames {
    PIECE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон',
}

export class Piece {
    color: Color;
    logo: typeof logo | null;
    cell: Cell;
    name: PieceNames;
    id: number;

    constructor(color: Color, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.piece = this;
        this.logo = null;
        this.name = PieceNames.PIECE;
        this.id = Math.random();
    }


    canMove(target: Cell) : boolean { 
        return true;
    }
    movePiece(target: Cell) {}
}