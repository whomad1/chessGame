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

    isFirstStep: boolean = true;

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) 
            return false;
        const direction = this.cell.piece?.color === Color.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.piece?.color === Color.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + direction || this.isFirstStep
                && (target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x 
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
                return true;
            }

        if (target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
                return true;
            }

        return false;
    }

    movePiece(target: Cell): void {
        super.movePiece(target);
        this.isFirstStep = false;
    }
}