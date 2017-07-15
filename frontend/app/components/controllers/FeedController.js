'use strict';

angular.module('aliereApp.feed', ['ngRoute'])

// Controller definition for this module
.controller('FeedController', ['$scope', function($scope) {
	$scope.votes = {
		'MSFT': 85,
	};

	$scope.userVotes = {
		'MSFT': 0,
	};

	$scope.currentStocks = [{
		name: 'AAPL',
		price: 111.06,
		change: 0.65,
		shares: '100 shares'
	}, {
		name: 'MSFT',
		price: 72.78,
		change: 1.01,
		shares: '50 shares'
	}, {
		name: 'SNAP',
		price: 15.27,
		change: -0.42,
		shares: '100 shares'
	}
	];

	$scope.incrementVote = function(key) {
		if ($scope.userVotes[key] < 1) {
			$scope.votes[key] += 1;
			$scope.userVotes[key] += 1;
		}
	};

	$scope.decrementVote = function(key) {
		if ($scope.userVotes[key] > -1) {
			$scope.votes[key] -= 1;
			$scope.userVotes[key] -= 1;
		}
	};
}]);

