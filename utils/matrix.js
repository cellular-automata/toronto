"use strict";

class Matrix {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.array = new Array(this.size);
  }

  get size() {
    return this.calcSize()
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

  static copy(a, b) {
    a.array = b.array;
  }
}

module.exports = Matrix;
