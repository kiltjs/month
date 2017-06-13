/* global describe it */

var Month = require('../lib/month'),
    assert = require('assert');

Month.config({ startDay: 1 });

describe('new Month', function () {

  it('should create a Month instance', function () {

    var m = new Month(2017, 6);

    assert.strictEqual( m.year, 2017 );
    assert.strictEqual( m.month, 6 );

  });

});
