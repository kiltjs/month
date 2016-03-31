(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// Code goes here

if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Month'], function () {
        return require('./month');
    });
}if ('angular' in global) {
    // Angular. Register as an anguar module.
    angular.module('Month', []).constant('Month', require('./month'));
} else {
    // Browser globals
    global.Month = require('./month');
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./month":2}],2:[function(require,module,exports){

function monthInformation(year, month, m) {

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
  if (Month.options.startDay !== undefined) {
    meta.startDay = Month.options.startDay;
  }

  var previousMonth = new Date(year, month - 1, 0),
      nextMonth = new Date(year, month + 1, 0);

  prevMonthDays = previousMonth.getDate() - meta.startDay;

  var count = 0;
  for (var i = 0; i < 42; i++) {
    var day = {};
    if (i < meta.startDay) {
      day.date = ++prevMonthDays;
      day.previous = true;
      day.month = previousMonth.getMonth();
      day.year = previousMonth.getFullYear();
    } else if (i > meta.lastDay + (meta.startDay - 1)) {
      day.date = ++count;
      day.next = true;
      day.month = nextMonth.getMonth();
      day.year = nextMonth.getFullYear();
    } else {
      day.date = i - meta.startDay + 1;
      day.month = date.getMonth();
      day.year = date.getFullYear();
    }
    m.list[m.list.length] = day;
  }

  return m;
}

function Month(year, month) {
  if (year instanceof Date) {
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
  if (typeof key === 'string') {
    Month.options[key] = value;
  } else if (key instanceof Object) {
    for (k in key) {
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

},{}]},{},[1]);
