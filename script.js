'use strict';

angular.module('app', [])
  .controller('ctrl', function($scope) {
    var suits = [ 'spade', 'club', 'diamond', 'heart'];
    $scope.fullDeck = [];
    angular.forEach(suits, function(suit){
      for (var i=1;i<14;i++){
        $scope.fullDeck.push(suit + ' value-' + i.pad(2));
      }
    });
    $scope.fullDeck.push('joker value-l');
    $scope.fullDeck.push('joker value-b');
  })
  .directive('card', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<label class="card" ng-style="id">' +
                  '<input type="checkbox">' +
                  '<span></span>' +
                  '<span></span>' +
                  '<span></span>' +
                '</label>',
      scope: {
        id: '@'
      },
      link: function(scope, element, attrs) {
      }
    };
  });