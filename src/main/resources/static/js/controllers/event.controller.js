(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller("EventCtrl", Event);

    function Event($scope, eventService, $stateParams, appConstants) {
        $scope.conf.state.url = appConstants.eventList.state;
        $scope.conf.state.title = appConstants.eventList.title;

        eventService.getEvent($stateParams.eventId)
            .success(
                function (event) {
                    $scope.event = event;
                    console.log('success', event);
                })
            .error(
                function (response) {
                    console.log('failure', response);
                });

    }

    Event.$inject = ['$scope', 'eventService', '$stateParams', 'appConstants'];
})();