(function () {
    'use strict';
    angular
        .module('eventsApp')
        .config(confFn);

    function confFn($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('new-event', {
                url: '/client/new-event/:eventId?',
                templateUrl: 'templates/EventEdit.html',
                controller: 'EventEditCtrl',
                resolve: {
                    data: getEvent
                }
            })
            .state('event-list', {
                url: '/',
                templateUrl: 'templates/EventList.html',
                controller: 'EventListCtrl'
            })
            .state('event', {
                url: '/client/event/:eventId',
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventCtrl'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

    }

    function getEvent(eventService, $stateParams) {
        if ($stateParams.eventId) {
            return eventService.getEvent($stateParams.eventId).then(function (res) {
                return res.data;
            });
        }

        return {}; //new event;
    }

    confFn.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    getEvent.$inject = ['eventService', '$stateParams'];


})();