
var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var BINS = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};

function getDate(year, month, day) {
  return new Date(Date.UTC(year, month, day));
}

function getDayOfWeek(year, month, day) {
  return DAYS[getDate(year, month, day).getUTCDay()];
}

function addPreviousDays (list, i, n, month, year) {
  for(; i <= n ; i++ ) list.push({
    date: i,
    month: month,
    year: year,
    previous: true,
    day: getDayOfWeek(year, month, i)
  });
}

function addNextDays (list, i, n, month, year) {
  for(; i <= n ; i++ ) list.push({
    date: i,
    month: month,
    year: year,
    next: true,
    day: getDayOfWeek(year, month, i)
  });
}

function monthInformation(year, month, m, start_day){

  m = m || {};

  var i, n,
      d = getDate(year, month, 1),
      previous_month_d = getDate(year, month, 0),
      month_last_day = getDate(year, month + 1, 0),
      next_month_d = getDate(year, month + 1, 1);

  start_day = start_day || 0;

  var last_day = previous_month_d.getUTCDate();
  var last_week_day = previous_month_d.getUTCDay();

  m.meta = {
    date: d,
    last_day: last_day,
    last_week_day: last_week_day,
    week_day: d.getUTCDay(),
    month_last_day: month_last_day
  };

  m.year = d.getUTCFullYear();
  m.month = d.getUTCMonth();

  var list = [], lastMonthFirstWeekDay = last_day - last_week_day + start_day;

  // previous month days
  addPreviousDays(
    list,
    lastMonthFirstWeekDay,
    last_week_day - start_day + lastMonthFirstWeekDay,
    previous_month_d.getUTCMonth(),
    previous_month_d.getUTCFullYear()
  );

  // current month days
  for( i = 1, n = month_last_day.getUTCDate() ; i <= n ; i++ ) list.push({
    date: i,
    month: month,
    year: year,
    day: getDayOfWeek(year, month, i),
    current: true
  });

  // next month days
  addNextDays(
    list,
    1,
    42 - list.length,
    next_month_d.getUTCMonth(),
    next_month_d.getUTCFullYear()
  );

  m.days = list;

  // eslint-disable-next-line
  // console.log(m);

  return m;
}

var default_start_day = 0;

function Month (year, month, start_day) {
  if( year instanceof Date ) {
    month = year.getUTCMonth();
    year = year.getUTCFullYear();
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

Month.prototype.getByDay = function() {
  var bins = JSON.parse(JSON.stringify(BINS));
  for (let i = 0; i < this.days.length; i++) {
    var day = this.days[i];
    bins[day.day].push(day);
  }
  return bins;
}

module.exports = Month;
