(function(){
  'use strict';

angular.module('portfolio'['ui.router'])
.config(config);

function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('portfolio.projects', {
                url: '/projects',
                controller: 'ProjectCtrl',
                controllerAs: 'vm',
                templateUrl: 'public/views/pages/projects/index.html'
          })
    };

})();
