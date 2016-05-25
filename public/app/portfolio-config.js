(function(){
  'use strict';

angular.module('portfolio', ['ui.router'])
.config(config);

  function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('portfolio', {
                url: '/',
                templateUrl: 'public/index.html',
                controller: 'PortfolioCtrl'
            })
  };


})();
