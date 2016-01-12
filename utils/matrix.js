"use strict";

class Matrix {
  constructor(width, height, array) {
    this.width = width;
    this.height = height;
    if (Array.isArray(array)) {
      this.setCells(array);
    }
    else {
      this.array = new Array(this.size);
      if (array !== undefined) {
        for (var i = 0; i < this.array.length; i++) {
          this.array[i] = array;
        }
      }
    }
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

  setCells(array) {
    if (Array.isArray(array)) {
      if (this.size === array.length) {
        this.array = array;
      }
      else {
        throw 'Invalid array size.';
      }
    }
    else {
      throw 'Invalid array.';
    }
  }

  getCellNeighbours(x, y) {
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

  getCellNeighbour(x, y, n) {
    switch (n) {
      case 0:
        return this.getCell(x === 0 ? this.lastRow : x - 1, y === 0 ? this.lastColumn : y - 1);
      case 1:
        return this.getCell(x === 0 ? this.lastRow : x - 1, y);
      case 2:
        return this.getCell(x === 0 ? this.lastRow : x - 1, y === this.lastColumn ? 0 : y + 1);
      case 3:
        return this.getCell(x, y === 0 ? this.lastColumn : y - 1);
      case 4:
        return this.getCell(x, y === this.lastColumn ? 0 : y + 1);
      case 5:
        return this.getCell(x === this.lastRow ? 0 : x + 1, y === 0 ? this.lastColumn : y - 1);
      case 6:
        return this.getCell(x === this.lastRow ? 0 : x + 1, y);
      case 7:
        return this.getCell(x === this.lastRow ? 0 : x + 1, y === this.lastColumn ? 0 : y + 1);
      default:
        throw `Invalid Neighbour index: ${n}.`;
    }
  }

  static copy(a, b) {
    a.array = b.array;
  }
}

module.exports = Matrix;
