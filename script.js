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
	  scope: {
		card: '=',
        id: '@'
	  },
      replace: true,
      template:	'<div class="card {{card}}" ng-class="{flipped: flipped}" ng-cloak>' +
				'  <label class="face" ng-style="id">' +
                '    <input ng-model="flipped" type="checkbox">' +
                '    <span></span>' +
                '    <span></span>' +
                '    <span></span>' +
                '  </label>' +
				'  <div class="back">' +
				'    <input ng-model="flipped" type="checkbox">' +
				'  </div>' +
				'</div>',
      link: function(scope, element, attrs) {
      }
    };
  });