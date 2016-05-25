(function(){
  'use strict';

angular.module('portfolio.projects')
.config(config);

function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('projects', {
                url: '/projects',
                controller: 'ProjectCtrl',
                controllerAs: 'vm',
                templateUrl: './app/projects/project.index.html'
          })
    };

})();
