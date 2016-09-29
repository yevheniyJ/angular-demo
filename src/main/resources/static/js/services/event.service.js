(function () {
    'use strict';

    angular.module('eventsApp')
        .factory('eventService', EventService);

    function EventService($http) {
        return {
            getEvent: function (eventId) {
                return $http({
                    method: 'GET',
                    url: '/event/' + eventId
                });
            },
            getAllEvents: function () {
                return $http({
                    method: 'GET',
                    url: '/events'
                });
            },
            saveEvent: function (event) {
                return $http({
                    method: 'POST',
                    url: '/event/save',
                    data: event
                });
            },
            deleteEvent: function (eventId) {
                return $http({
                    method: 'DELETE',
                    url: '/event/' + eventId
                });
            }
        };
    }

    EventService.$inject = ['$http'];
})();