// Application module
(function(){
  'use strict';

angular.module('portfolio', [])
  .controller('PortfolioCtrl', function ($scope) {
    $scope.projects = [
    {
    id: 0,
    imageUrl:'img/Everest_Game_SS.jpg',
    title: 'Everest Trivia',
    languages: 'HTML | CSS | Javascript',
    description: 'Simple trivia project completed in week 4'
  },
  {
    id: 1,
    imageUrl:'img/TTT.jpg',
    title: 'Tic Tac Toe',
    languages: 'HTML | CSS | Javascript',
    description: 'Tic Tac Toe project completed in week 1'
  }
    ];
  });


})();
