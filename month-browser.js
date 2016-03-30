// Code goes here

if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Month'], function () {
      return require('./month');
    });
} else {
    // Browser globals
    global.Month = require('./month');
}
