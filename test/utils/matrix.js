const assert = require('assert');

describe('Matrix Class', function () {

  describe('constructor()', function () {

    it('should return matrix class', function (done) {
      const Matrix = require('../../utils/matrix');
      assert(Matrix);
      done();
    });

    it('Matrix of 10x10 should have area of 100', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(10, 10);
      assert.equal(m.size, 10 * 10);
      done();
    });

    it('should create a matrix with all zeros', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3, 0);
      assert.equal(m.getCell(0, 0), 0);
      assert.equal(m.getCell(0, 1), 0);
      assert.equal(m.getCell(0, 2), 0);
      assert.equal(m.getCell(1, 0), 0);
      assert.equal(m.getCell(1, 1), 0);
      assert.equal(m.getCell(1, 2), 0);
      assert.equal(m.getCell(2, 0), 0);
      assert.equal(m.getCell(2, 1), 0);
      assert.equal(m.getCell(2, 2), 0);
      done();
    });

    it('should create a matrix with nine cells', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3, [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
      ]);
      assert.deepEqual(m.array, [1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
      done();
    });

  });

  describe('setCells()', function () {

    it.skip('should return an error', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3);
      m.setCells([1, 2]);
      done();
    });

    it('should set cells array', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3);
      const a = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
      ];
      m.setCells(a);
      assert.equal(m.array, a);
      assert.equal(m.getCell(0, 0), 1);
      assert.equal(m.getCell(0, 1), 2);
      assert.equal(m.getCell(0, 2), 3);
      assert.equal(m.getCell(1, 0), 4);
      assert.equal(m.getCell(1, 1), 5);
      assert.equal(m.getCell(1, 2), 6);
      assert.equal(m.getCell(2, 0), 7);
      assert.equal(m.getCell(2, 1), 8);
      assert.equal(m.getCell(2, 2), 9);
      done();
    });

  });

  describe('getCellNeighbours()', function () {

    it('should get centre cell neighbours', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3, [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
      ]);
      assert.deepEqual(m.getCellNeighbours(1, 1), [1, 2, 3, 4, 6, 7, 8, 9]);
      done();
    });

    it('should get corner cell neighbours', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3, [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
      ]);
      assert.deepEqual(m.getCellNeighbours(0, 0), [9, 7, 8, 3, 2, 6, 4, 5]);
      done();
    });

  });

  describe('getCellNeighbour()', function () {

    it('should get centre cell neighbour', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3, [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
      ]);
      assert.equal(m.getCellNeighbour(1, 1, 0), 1);
      assert.equal(m.getCellNeighbour(1, 1, 1), 2);
      assert.equal(m.getCellNeighbour(1, 1, 2), 3);
      assert.equal(m.getCellNeighbour(1, 1, 3), 4);
      assert.equal(m.getCellNeighbour(1, 1, 4), 6);
      assert.equal(m.getCellNeighbour(1, 1, 5), 7);
      assert.equal(m.getCellNeighbour(1, 1, 6), 8);
      assert.equal(m.getCellNeighbour(1, 1, 7), 9);
      done();
    });

    it('should get corner cell neighbour', function (done) {
      const Matrix = require('../../utils/matrix');
      const m = new Matrix(3, 3, [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
      ]);
      assert.equal(m.getCellNeighbour(0, 0, 0), 9);
      assert.equal(m.getCellNeighbour(0, 0, 1), 7);
      assert.equal(m.getCellNeighbour(0, 0, 2), 8);
      assert.equal(m.getCellNeighbour(0, 0, 3), 3);
      assert.equal(m.getCellNeighbour(0, 0, 4), 2);
      assert.equal(m.getCellNeighbour(0, 0, 5), 6);
      assert.equal(m.getCellNeighbour(0, 0, 6), 4);
      assert.equal(m.getCellNeighbour(0, 0, 7), 5);
      done();
    });

  });

});
