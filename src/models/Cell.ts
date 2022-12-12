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

    isEmpty(): boolean {
        return this.piece === null;
    }

    isEnemy(target: Cell): boolean {
        if(target.piece) {
            return this.piece?.color !== target.piece.color;
        }
        return false;
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for(let y = min + 1; y < max; y++) {
            if(!this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y) {
            return false;
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);

        for(let x = min + 1; x < max; x++) {
            if(!this.board.getCell(x, this.y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyDiagonal(target: Cell): boolean {
        const absY = Math.abs(target.y - this.y);
        const absX = Math.abs(target.x - this.x);

        if(absY !== absX) {
            return false;
        }

        const dy = this.y < target.y ? 1 : -1;
        const dx = this.x < target.x ? 1 : -1;

        for(let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx*i, this.y + dy*i).isEmpty())
            {
                return false;
            }
        }
        return true;
    }

    setPiece(piece: Piece) {
        this.piece = piece;
        this.piece.cell = this;
    }

    movePiece(target: Cell) {
        if(this.piece && this.piece?.canMove(target)) {
            this.piece.movePiece(target);
            target.setPiece(this.piece);
            this.piece = null;
        }
    }
}