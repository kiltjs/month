// Code goes here

if( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define(['Month'], function () {
      return require('./month');
    });
} if( 'angular' in global ) {
    // Angular. Register as an anguar module.
    angular.module('Month',[]).constant('Month', require('./month') );
} else {
    // Browser globals
    global.Month = require('./month');
}
