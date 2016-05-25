(function(){
  'use strict';

angular.module('portfolio.projects', [])
.config(function ($stateProvider) {
  console.log('project-config hit');
  $stateProvider
  .state('portfolio.projects', {
    url: '/',
    views: {
      'projects@': {
        controller: 'ProjectCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/projects/project.index.html'
      }
    }
  })
})
.controller('ProjectCtrl', function($http, $scope) {
  console.log('ProjectCtrl is running');
  // var controller = this;
  // $http({method: 'GET', url: '/projects'}).success(function(data) {
  //   controller.projects = data;
  });

  var projects = [
    {
      imageUrl:'img/Everest_Game_SS.jpg',
      title: 'Everest Trivia',
      languages: 'HTML | CSS | Javascript',
      description: 'Simple trivia project completed in week 4'
    },
    {
      imageUrl:'img/TTT.jpg',
      title: 'Tic Tac Toe',
      languages: 'HTML | CSS | Javascript',
      description: 'Tic Tac Toe project completed in week 1'
    }
  ];


})();
