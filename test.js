
var Month = require('./lib/month');

Month.config({ startDay: 1 });

// months from 0 (january) ... to 11 (december)
console.log( new Month(2016, 2) );
