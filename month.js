
function monthInformation(year, month, m, start_day){

  m = m || {};

  var i, n,
      d = new Date(year, month, 1),
      previous_month_d = new Date(year, month, 0),
      month_last_day = new Date(year, month + 1, 0),
      next_month_d = new Date(year, month + 1, 1);

  start_day = start_day || 0;

  var last_day = previous_month_d.getDate();
  var last_week_day = previous_month_d.getDay();

  m.meta = {
    date: d,
    last_day: last_day,
    last_week_day: last_week_day,
    week_day: d.getDay(),
  };

  m.year = d.getFullYear();
  m.month = d.getMonth();

  var list = [], lastMonthFirstWeekDay = last_day - last_week_day + start_day;

  // previous month days
  for( i = 0, n = last_week_day + 1 - start_day ; i < n ; i++ ) list.push({
    date: lastMonthFirstWeekDay + i,
    month: previous_month_d.getMonth(),
    year: previous_month_d.getFullYear(),
    previous: true
  });

  // current month days
  for( i = 1, n = month_last_day.getDate() ; i <= n ; i++ ) list.push({
    date: i,
    month: month,
    year: year,
    current: true
  });

  // next month days
  for( i = 1, n = 42 - list.length ; i <= n ; i++ ) list.push({
    date: i,
    month: next_month_d.getMonth(),
    year: next_month_d.getFullYear(),
    next: true
  });

  m.days = list;

  // eslint-disable-next-line
  // console.log(m);

  return m;
}

var default_start_day = 0;

function Month (year, month, start_day) {
  if( year instanceof Date ) {
    month = year.getMonth();
    year = year.getFullYear();
  }

  monthInformation(year, month, this, start_day || default_start_day);
}

Month.options = {};
Month.setFirstWeekDay = function (start_day) {
  default_start_day = start_day;
};

Month.prototype.previous = function () {
  return new Month(this.year, this.month - 1, 1);
};

Month.prototype.next = function () {
  return new Month(this.year, this.month + 1, 1);
};

module.exports = Month;
