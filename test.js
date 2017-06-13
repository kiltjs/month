
var Month = require('./lib/month');

Month.config({ startDay: 1 });

// months from 0 (january) ... to 11 (december)
var m = new Month(2017, 6);
console.log( m );
// console.log( m.previous() );
// console.log( m.next() );
