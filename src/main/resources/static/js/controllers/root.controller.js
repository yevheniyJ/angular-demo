(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller("RootCtrl", Root);

    function Root($scope, $state, appConstants) {
        $scope.conf = {
            state: {
                url: appConstants.eventEdit.state,
                title: appConstants.eventEdit.title
            }
        };

        $scope.redirect = function (state) {
            $state.go(state);
        };
    }

    Root.$inject = ['$scope', '$state', 'appConstants'];
})();