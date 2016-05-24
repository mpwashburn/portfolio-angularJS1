(function(){
  'use strict';

angular.module('portfolio')
.config(config);

  function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('portfolio', {
                url: '/',
                abstract: true,
                templateUrl: 'app/index.html'
            })
  };


})();
