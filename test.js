
var Month = require('./lib/month');

Month.config({ startDay: 1 });

console.log( new Month(2016, 3) );
