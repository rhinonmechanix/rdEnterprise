import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {


  chessboard: string[][] = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
  ];

  rows = [0, 1, 2, 3, 4, 5, 6, 7];
  squares = [0, 1, 2, 3, 4, 5, 6, 7];
  hoveredSquare: { row: number, col: number } | null = null;

  onSquareHover(row: number, col: number): void {
    this.hoveredSquare = { row, col };
  }

  onSquareLeave(): void {
    this.hoveredSquare = null;
  }

  isHovered(row: number, col: number): boolean {
    return (
      this.hoveredSquare !== null &&
      this.hoveredSquare.row === row &&
      this.hoveredSquare.col === col &&
      (row + col) % 2 === 0
    );
  }

  isBishopAttack(row: number, col: number): boolean {
    if (!this.hoveredSquare) return false;

    const [hoveredRow, hoveredCol] = [this.hoveredSquare.row, this.hoveredSquare.col];
    return Math.abs(row - hoveredRow) === Math.abs(col - hoveredCol);
  }
}
