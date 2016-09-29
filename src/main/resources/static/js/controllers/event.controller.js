(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller("EventCtrl", Event);

    function Event($scope, eventService, $stateParams) {
        $scope.conf.state.url = 'event-list';
        $scope.conf.state.title = 'Event List';

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

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }

    Event.$inject = ['$scope', 'eventService', '$stateParams'];
})();