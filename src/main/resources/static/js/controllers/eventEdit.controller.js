(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller("EventEditCtrl", EventEdit);

    function EventEdit($scope, eventService, $state, data) {

        $scope.conf.state.url = 'event-list';
        $scope.conf.state.title = 'Event List';

        $scope.event = data;

        $scope.saveEvent = function (event) {
            eventService.saveEvent(event)
                .success(
                    function (response) {
                        console.log('success', response);
                        $state.go($scope.conf.state.url);
                    }
                )
                .error(
                    function (response) {
                        console.log('failure', response);
                    }
                )
        };
        $scope.cancelEdit = function () {
            $state.go($scope.conf.state.url);
        };
    }

    EventEdit.$inject = ['$scope', 'eventService', '$state', 'data'];
})();