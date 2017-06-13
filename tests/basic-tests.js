/* global describe it */

var Month = require('../month'),
    assert = require('assert');

Month.setFirstWeekDay(1);

describe('new Month', function () {

  it('should create a Month instance', function () {

    var m = new Month(2017, 5);

    assert.strictEqual( m.year, 2017 );
    assert.strictEqual( m.month, 5 );

  });

  it('should create a Month instance and get previous', function () {

    var m = new Month(2017, 5).previous();

    assert.strictEqual( m.year, 2017 );
    assert.strictEqual( m.month, 4 );

  });

  it('should create a Month instance and get previous (implicit year)', function () {

    var m = new Month(2017, 0).previous();

    assert.strictEqual( m.year, 2016 );
    assert.strictEqual( m.month, 11 );

  });

  it('should create a Month instance and get next', function () {

    var m = new Month(2017, 5).next();

    assert.strictEqual( m.year, 2017 );
    assert.strictEqual( m.month, 6 );

  });

  it('should create a Month instance and get next (implicit year)', function () {

    var m = new Month(2017, 11).next();

    assert.strictEqual( m.year, 2018 );
    assert.strictEqual( m.month, 0 );

  });

});
