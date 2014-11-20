var iec = angular.module("ie8compatibility", ['ngRoute', 'ui.bootstrap']);

iec.config(function($routeProvider){
    $routeProvider.when('/home', {
            controller: 'iecCtrl',
            templateUrl: 'views/home.html'
        }
    ).when('/about', {
            controller: 'iecCtrl',
            templateUrl: 'views/about.html'
        }
    ).otherwise({redirectTo: '/home'});
});

iec.controller("iecCtrl", function($scope, $location){
    $scope.templates = [
        {
            name: 'introduction',
            url: 'views/introduction.html',
            description: 'introduction'
        },
        {
            name: 'AngularJS UI Bootstrap typeahead',
            url: 'views/issues/typeahead.html',
            description: 'typeahead issue'
        },
        {
            name: 'AngularJS UI Bootstrap modal window size',
            url: 'views/issues/modal.html',
            description: 'modal size'
        },
        {
            name: 'Accordion header: font size',
            url: 'views/issues/accordion.html',
            description: 'accordion, font size'
        },
        {
            name: 'Auto-complete: performance status',
            url: '',
            description: ''
        }
    ];

    $scope.template = $scope.templates[0];
    $scope.activeTemplate = function(template){
        $scope.template = template;
    }

    $scope.isActive = function(link) {
        if (link == $location.path()){
            return true;
        }
        return false;
    }
});
