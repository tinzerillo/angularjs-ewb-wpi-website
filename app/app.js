var app = angular.module("ewbWebsite", ['ngRoute', 'ui.bootstrap', 'twitter.timeline', 'angular-carousel']);

// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'app/fragments/home.html',
                controller  : 'homeController'
            })

            .when('/about', {
                templateUrl : 'app/fragments/about.html',
                controller  : 'aboutController'
            })

            .when('/Guachtuq-Overview', {
                templateUrl : 'app/fragments/projects/Guachtuq-Overview.html',
                controller  : 'guachtuqOverviewController'
            })
			
			.when('/Guachtuq-Trips', {
                templateUrl : 'app/fragments/projects/Guachtuq-Trips.html',
                controller  : 'guachtuqTripsController'
            })

			.when('/Guachtuq-Community', {
                templateUrl : 'app/fragments/projects/Guachtuq-Community.html',
                controller  : 'guachtuqCommunityController'
            })
            .when('/Guachtuq-Documents', {
                templateUrl : 'app/fragments/projects/Guachtuq-Documents.html',
                controller  : 'guachtuqDocumentsController'
            })
        
            .when('/Conchan-Overview', {
                templateUrl : 'app/fragments/projects/Conchan-Overview.html',
                controller  : 'conchanOverviewController'
            })
        
            .when('/Conchan-Trips', {
                templateUrl : 'app/fragments/projects/Conchan-Trips.html',
                controller  : 'conchanTripsController'
            })

            .when('/getinvolved', {
                templateUrl : 'app/fragments/getinvolved.html',
                controller  : 'getinvolvedController'
            })

            .when('/sponsors', {
                templateUrl : 'app/fragments/sponsors.html',
                controller : 'sponsorController'
            })

			.when('/blog', {
                templateUrl : 'app/fragments/blog/index.cgi',
                controller  : 'blogController'
            });
    });