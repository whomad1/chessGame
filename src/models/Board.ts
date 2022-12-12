import { Cell } from "./Cell";
import { Color } from "./Color";
import { Bishop } from "./pieces/Bishop";
import { King } from "./pieces/King";
import { Knight } from "./pieces/Knight";
import { Pawn } from "./pieces/Pawn";
import { Queen } from "./pieces/Queen";
import { Rook } from "./pieces/Rook";
export class Board {
    cells: Cell[][] = []


    public initCells() {
        for(let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for(let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Color.BLACK, null)); // black cell
                } else {
                    row.push(new Cell(this, j, i, Color.WHITE, null)); // white cell
                }
            }
            this.cells.push(row);
        }
    }

    public highlightCells(selectedCell: Cell | null) {
        for(let i =0; i  < this.cells.length; i++ ) {
            const row = this.cells[i];
            for(let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.piece?.canMove(target);
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    private addPawns() {
        for(let i=0; i< 8; i++)
        {
            new Pawn(Color.WHITE, this.getCell(i, 6));
            new Pawn(Color.BLACK, this.getCell(i, 1));
        }
    }

    private addRooks() {
        new Rook(Color.WHITE, this.getCell(7, 7));
        new Rook(Color.WHITE, this.getCell(0, 7));

        new Rook(Color.BLACK, this.getCell(0, 0));
        new Rook(Color.BLACK, this.getCell(7, 0));
    }

    private addBishops() {
        new Bishop(Color.WHITE, this.getCell(2, 7));
        new Bishop(Color.WHITE, this.getCell(5, 7));

        new Bishop(Color.BLACK, this.getCell(2, 0));
        new Bishop(Color.BLACK, this.getCell(5, 0));
    }

    private addQueens() {
        new Queen(Color.WHITE, this.getCell(3, 7));
        new Queen(Color.BLACK, this.getCell(3, 0));
    }

    private addKings() {
        new King(Color.WHITE, this.getCell(4, 7));
        new King(Color.BLACK, this.getCell(4, 0));
    }

    private addKnights() {
        new Knight(Color.WHITE, this.getCell(1, 7));
        new Knight(Color.WHITE, this.getCell(6, 7));
        new Knight(Color.BLACK, this.getCell(1, 0));
        new Knight(Color.BLACK, this.getCell(6, 0));
    }

    public addPieces() {
        this.addPawns();
        this.addBishops();
        this.addKnights();
        this.addKings();
        this.addQueens();
        this.addRooks();
    }
}