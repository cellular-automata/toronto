const assert = require('assert');

describe('Matrix Class', function () {

  it('should return matrix class', function (done) {
    const Matrix = require('../../utils/matrix');
    assert(Matrix);
    done();
  });

  it('Matrix of 10x10 should have area of 100', function (done) {
    const Matrix = require('../../utils/matrix');
    const m = new Matrix(10, 10);
    assert.equal(m.area, 100);
    done();
  });

});
