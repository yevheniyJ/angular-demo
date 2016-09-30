(function () {
    'use strict';

    angular
        .module('eventsApp')
        .constant('appConstants', {
            eventList: {
                state: 'event-list',
                url: '/',
                templateUrl: 'templates/EventList.html',
                controller: 'EventListCtrl',
                title: 'Event List'
            },
            eventEdit: {
                state: 'new-event',
                url: '/client/new-event/:eventId?',
                templateUrl: 'templates/EventEdit.html',
                controller: 'EventEditCtrl',
                title: 'New Event'
            },
            eventView: {
                state: 'event',
                url: '/client/event/:eventId',
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventCtrl'
            }
        });
})();