require('angular');
var MainController = require('./controllers/MainController');

angular.module('app', []);

angular
  .module('app')
  .controller('MainController', MainController);
