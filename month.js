// Code goes here

(function (root, definition) {

  if ( typeof window === 'undefined' ) {
    if ( typeof module !== 'undefined' ) {
      module.exports = definition();
    }
  } else {
    if ( root.fn ) {
      fn.define('Month', function () { return definition(root); } );
    } else if ( root.angular !== undefined ) {
      var Month = definition();
      angular.module('month', []).provider('Month', function () {
        this.config = Month.config;
        this.$get = function () {
          return Month;
        };
      });
    } else if( !root.Month ) {
      root.Month = definition();
    }
  }

})(this, function () {

  function monthInformation(year, month, m){

    m = m || {};

    var date = new Date(year, month, 0),
        options = Month.options;

    m.lastDay = date.getDate();
    m.lastWeekDay = date.getDay();

    date.setDate(1);
    m.startDay = date.getDay();

    m.days = [];

    var prevMonthDays = 0;
    if(m.startDay !== 0) {
      prevMonthDays = new Date(year, month - 1, 0).getDate() - m.startDay;
    }

    var count = 0;
    for(var i = 0; i < 42; i++) {
        var day = {};
        if(i < m.startDay) {
            day.date = (prevMonthDays = prevMonthDays + 1);
        } else if(i > m.totalDays + (m.startDay - 1)) {
            day.date = (count = count + 1);
        } else {
            day.date = (i - m.startDay) + 1;
        }
        m.days[m.days.length] = day.date;
    }

    return m;
  }

  function extend () {
    var key,
        dest = [].shift.call(arguments),
        orig = [].shift.call(arguments);

    while( orig ) {
      for( key in orig ) {
        dest[key] = orig[key];
      }
      orig = [].shift.call(arguments);
    }

    return dest;
  }

  function Month (year, month) {
    this.year = year;
    this.month = month - 1;
    monthInformation(this.year, this.month, this);
  }

  Month.options = {};
  Month.config = function (key, value) {
    if( key instanceof 'string' ) {
      Month.options[key] = value;
    } else if( key instanceof Object ) {
      extend(Month.options, key);
    }
  };

  Month.prototype.next = function () {

  };

  return Month;

});


/* Usage below */
new Month(2015, 4);
