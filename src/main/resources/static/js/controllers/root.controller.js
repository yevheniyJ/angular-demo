(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller("RootCtrl", Root);

    function Root($scope, $state) {
        $scope.conf = {
            state: {
                url: 'new-event',
                title: 'New Event'
            }
        };

        $scope.redirect = function (state) {
            $state.go(state);
        };
    }

    Root.$inject = ['$scope', '$state'];
})();