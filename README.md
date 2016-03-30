
calendar-month
==============


> node

``` sh
npm i calendar-month --save
```

> bower

``` sh
npm i calendar-month --save
```

> example:

``` js
var Month = require('./month');

Month.config({ startDay: 1 });

console.log( new Month(2016, 3) );
```

> returns:

``` js
{
  year: 2016,
  month: 3,
  meta: {
    date: 'Tue Mar 01 2016 00:00:00 GMT+0100 (CET)',
    lastDay: 31,
    lastWeekDay: 4,
    startDay: 1
  },
  list: [
    { date: 29, previous: true },
    { date: 1 },
    { date: 2 },
    { date: 3 },
    { date: 4 },
    { date: 5 },
    { date: 6 },
    { date: 7 },
    { date: 8 },
    { date: 9 },
    { date: 10 },
    { date: 11 },
    { date: 12 },
    { date: 13 },
    { date: 14 },
    { date: 15 },
    { date: 16 },
    { date: 17 },
    { date: 18 },
    { date: 19 },
    { date: 20 },
    { date: 21 },
    { date: 22 },
    { date: 23 },
    { date: 24 },
    { date: 25 },
    { date: 26 },
    { date: 27 },
    { date: 28 },
    { date: 29 },
    { date: 30 },
    { date: 31 },
    { date: 1, next: true },
    { date: 2, next: true },
    { date: 3, next: true },
    { date: 4, next: true },
    { date: 5, next: true },
    { date: 6, next: true },
    { date: 7, next: true },
    { date: 8, next: true },
    { date: 9, next: true },
    { date: 10, next: true }
  ]
}
```
