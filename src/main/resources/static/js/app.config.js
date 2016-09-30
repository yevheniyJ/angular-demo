(function () {
    'use strict';
    angular
        .module('eventsApp')
        .config(confFn);

    function confFn($stateProvider, $urlRouterProvider, $locationProvider, appConstants) {
        $stateProvider
            .state(appConstants.eventEdit.state, {
                url: appConstants.eventEdit.url,
                templateUrl: appConstants.eventEdit.templateUrl,
                controller: appConstants.eventEdit.controller,
                resolve: {
                    data: getEvent
                }
            })
            .state(appConstants.eventList.state, {
                url: appConstants.eventList.url,
                templateUrl: appConstants.eventList.templateUrl,
                controller: appConstants.eventList.controller
            })
            .state(appConstants.eventView.state, {
                url: appConstants.eventView.url,
                templateUrl: appConstants.eventView.templateUrl,
                controller: appConstants.eventView.controller
            });

        $urlRouterProvider.otherwise(appConstants.eventList.url);
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

    confFn.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'appConstants'];

    getEvent.$inject = ['eventService', '$stateParams'];


})();