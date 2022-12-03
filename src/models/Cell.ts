import { Board } from "./Board";
import { Color } from "./Color";
import { Piece } from "./pieces/Piece";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    piece: Piece | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Color, piece: Piece | null) {
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.piece = piece;
        this.available = false;
        this.id = Math.random();
    }
}