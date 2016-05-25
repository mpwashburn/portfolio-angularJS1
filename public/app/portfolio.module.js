// Application module
(function(){
  'use strict';

angular.module('portfolio', [
  'ui.router',
  'portfolio.projects'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider
              .state('portfolio', {
                  url: '',
                  abstract: true
              });
              $urlRouterProvider.otherwise('/');
    })
  .controller('PortfolioCtrl', function ($scope) {
    console.log("PortfolioCtrl running");
  });


})();
