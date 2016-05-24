angular.module('portfolio')
.controller('ProjectCtrl', function($http) {
  var controller = this;
  $http({method: 'GET', url: '/projects'}).success(function(data) {
    controller.projects = data;
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
});
