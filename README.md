
calendar-month
==============
[![](https://img.shields.io/npm/v/calendar-month.svg)](https://www.npmjs.com/package/calendar-month) [![](https://img.shields.io/bower/v/calendar-month.svg)](http://bower.io/search/?q=calendar-month)

> node

``` sh
npm i calendar-month --save
```

> bower

``` sh
bower i calendar-month --save
```

> example:

``` js
var Month = require('./month');

Month.config({ startDay: 1 });

// months from 0 (january) ... to 11 (december)
new Month(2016, 3);
```

> returns:

``` js
Month {
  year: 2016,
  month: 2,
  meta:
   { date: 'Tue Mar 01 2016 00:00:00 GMT+0100 (CET)',
     lastDay: 31,
     lastWeekDay: 4,
     startDay: 1 },
  list: [
    { date: 29, previous: true, month: 1, year: 2016 },
    { date: 1, month: 2, year: 2016 },
    { date: 2, month: 2, year: 2016 },
    { date: 3, month: 2, year: 2016 },
    { date: 4, month: 2, year: 2016 },
    { date: 5, month: 2, year: 2016 },
    { date: 6, month: 2, year: 2016 },
    { date: 7, month: 2, year: 2016 },
    { date: 8, month: 2, year: 2016 },
    { date: 9, month: 2, year: 2016 },
    { date: 10, month: 2, year: 2016 },
    { date: 11, month: 2, year: 2016 },
    { date: 12, month: 2, year: 2016 },
    { date: 13, month: 2, year: 2016 },
    { date: 14, month: 2, year: 2016 },
    { date: 15, month: 2, year: 2016 },
    { date: 16, month: 2, year: 2016 },
    { date: 17, month: 2, year: 2016 },
    { date: 18, month: 2, year: 2016 },
    { date: 19, month: 2, year: 2016 },
    { date: 20, month: 2, year: 2016 },
    { date: 21, month: 2, year: 2016 },
    { date: 22, month: 2, year: 2016 },
    { date: 23, month: 2, year: 2016 },
    { date: 24, month: 2, year: 2016 },
    { date: 25, month: 2, year: 2016 },
    { date: 26, month: 2, year: 2016 },
    { date: 27, month: 2, year: 2016 },
    { date: 28, month: 2, year: 2016 },
    { date: 29, month: 2, year: 2016 },
    { date: 30, month: 2, year: 2016 },
    { date: 31, month: 2, year: 2016 },
    { date: 1, next: true, month: 3, year: 2016 },
    { date: 2, next: true, month: 3, year: 2016 },
    { date: 3, next: true, month: 3, year: 2016 },
    { date: 4, next: true, month: 3, year: 2016 },
    { date: 5, next: true, month: 3, year: 2016 },
    { date: 6, next: true, month: 3, year: 2016 },
    { date: 7, next: true, month: 3, year: 2016 },
    { date: 8, next: true, month: 3, year: 2016 },
    { date: 9, next: true, month: 3, year: 2016 },
    { date: 10, next: true, month: 3, year: 2016 }
  ]
}
```
