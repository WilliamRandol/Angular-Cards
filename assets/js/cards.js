'use strict';

angular.module('cards', [])
  .controller('cardsCtrl', function($scope) {
  
	function buildDeck(jokers, decks){
		var suits = [ 'spade', 'club', 'diamond', 'heart'];
		var values = Number.range(1,13);
		var fullDeck = [];
		suits.forEach(function(suit){
		  values.every(function(value){
			fullDeck.push({selected: false});
			fullDeck[fullDeck.length - 1][suit + ' value-' + value.pad(2)] = true;
		  });
		});
		if (jokers) {
			fullDeck.push({'joker value-l': true, selected: false});
			fullDeck.push({'joker value-b': true, selected: false});
		}
		if (decks) {
			var newDeck = fullDeck;
			for (var i = 0; i < decks; i++){
				fullDeck = fullDeck.add(newDeck);
			}
		}
		return fullDeck;
	}
	$scope.fullDeck = buildDeck(true);

	$scope.toggleSelected = function(card){
		card.selected = !card.selected;
	}
	
  })
  .directive('card', function() {
    return {
	  scope: {
	  },
	  restrict: 'E',
      templateUrl: 'assets/js/template/card.html',
    };
  });
  