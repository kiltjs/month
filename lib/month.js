
function monthInformation(year, month, m){

  m = m || {};

  var date = new Date(year, month, 0),
      meta = {},
      options = Month.options;

  m.meta = meta;
  meta.date = date;

  meta.lastDay = date.getDate();
  meta.lastWeekDay = date.getDay();

  date.setDate(1);
  meta.startDay = date.getDay();

  m.list = [];

  var prevMonthDays = 0;
  if( Month.options.startDay !== undefined ) {
    meta.startDay = Month.options.startDay;
  }
  prevMonthDays = new Date(year, month - 1, 0).getDate() - meta.startDay;

  var count = 0;
  for(var i = 0; i < 42; i++) {
      var day = {};
      if(i < meta.startDay) {
          day.date = (prevMonthDays = prevMonthDays + 1);
          day.previous = true;
      } else if(i > meta.lastDay + (meta.startDay - 1)) {
          day.date = (count = count + 1);
          day.next = true;
      } else {
          day.date = (i - meta.startDay) + 1;
      }
      m.list[m.list.length] = day;
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
  this.month = month;
  monthInformation(this.year, this.month, this);
}

Month.options = {};
Month.config = function (key, value) {
  if( typeof key === 'string' ) {
    Month.options[key] = value;
  } else if( key instanceof Object ) {
    extend(Month.options, key);
  }
};

Month.prototype.next = function () {

};

module.exports = Month;
