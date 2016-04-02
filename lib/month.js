
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
  meta.startDay = date.getDay() - Month.options.startDay || 0;
  if( meta.startDay < 0 ) {
    meta.startDay = meta.startDay + 7;
  }

  m.list = [];

  var previousMonth = new Date(year, month - 1, 0),
      nextMonth = new Date(year, month + 1, 0);

  var prevMonthDays = 0;

  prevMonthDays = previousMonth.getDate() - meta.startDay;

  var count = 0;
  for(var i = 0; i < 42; i++) {
      var day = {};
      if(i < meta.startDay) {
          day.date = ++prevMonthDays;
          day.previous = true;
          day.month = previousMonth.getMonth();
          day.year = previousMonth.getFullYear();
      } else if(i > meta.lastDay + (meta.startDay - 1)) {
          day.date = ++count;
          day.next = true;
          day.month = nextMonth.getMonth();
          day.year = nextMonth.getFullYear();
      } else {
          day.date = (i - meta.startDay) + 1;
          day.month = date.getMonth();
          day.year = date.getFullYear();
      }
      m.list[m.list.length] = day;
  }

  return m;
}

function Month (year, month) {
  if( year instanceof Date ) {
    month = year.getMonth();
    year = year.getFullYear();
  }
  var d = new Date(year, month, 1);

  this.year = d.getFullYear();
  this.month = d.getMonth();
  monthInformation(this.year, this.month + 1, this);
}

Month.options = {};
Month.config = function (key, value) {
  if( typeof key === 'string' ) {
    Month.options[key] = value;
  } else if( key instanceof Object ) {
    for( k in key ) {
      Month.options[k] = key[k];
    }
  }
};

Month.prototype.previous = function () {
  return new Month(this.year, this.month - 1, 1);
};

Month.prototype.next = function () {
  return new Month(this.year, this.month + 1, 1);
};

module.exports = Month;
