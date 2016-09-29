(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller("EventListCtrl", EventList);

//ng-annotate
//for Grunt
    /*@ngInject*/

    function EventList($scope, eventService, $state) {
        $scope.conf.state.url = 'new-event';
        $scope.conf.state.title = 'New Event';
        // $scope.events = data;

        eventService.getAllEvents()
            .success(
                function (events) {
                    $scope.events = events;
                    console.log('success', event);
                })
            .error(
                function (response) {
                    console.log('failure', response);

                    //response.data.id

                    //$scope.events
                });

        $scope.editEvent = function (eventId) {
            $state.go('new-event', {eventId: eventId});
        };

        $scope.deleteEvent = function (eventId) {
            eventService.deleteEvent(eventId)
                .success(
                    function (response) {
                        console.log('success', response);
                        var id = response.content;
                        for (var i = 0; i < $scope.events.length; i++) {
                            if ($scope.events[i].id === id) {
                                $scope.events.splice(i, 1);
                                break;
                            }
                        }
                    })
                .error(
                    function (response) {
                        console.log('failure', response);
                    });
        };

    }

    EventList.$inject = ['$scope', 'eventService', '$state'];
})();