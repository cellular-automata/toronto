"use strict";

class Matrix {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.array = new Array(this.size);
  }

  get lastRow() {
    return this.width - 1;
  }

  get lastColumn() {
    return this.height - 1;
  }

  get size() {
    return this.calcSize();
  }

  calcSize() {
    return this.height * this.width;
  }

  getCell(x, y) {
    return this.array[this.width * x + y];
  }

  setCell(x, y, value) {
    this.array[this.width * x + y] = value;
  }

  getCellNeighbors(x, y) {
    const previousRow = x === 0 ? this.lastRow : x - 1;
    const nextRow = x === this.lastRow ? 0 : x + 1;
    const previousColumn = y === 0 ? this.lastColumn : y - 1;
    const nextColumn = y === this.lastColumn ? 0 : y + 1;
    return [
      this.getCell(previousRow, previousColumn),
      this.getCell(previousRow, y),
      this.getCell(previousRow, nextColumn),
      this.getCell(x, previousColumn),
      this.getCell(x, nextColumn),
      this.getCell(nextRow, previousColumn),
      this.getCell(nextRow, y),
      this.getCell(nextRow, nextColumn)
    ];
  }

  static copy(a, b) {
    a.array = b.array;
  }
}

module.exports = Matrix;
