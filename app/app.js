var app = angular.module("ewbWebsite", ['ngRoute']);

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

            .when('/projects', {
                templateUrl : 'app/fragments/projects.html',
                controller  : 'projectsController'
            })

            .when('/getinvolved', {
                templateUrl : 'app/fragments/getinvolved.html',
                controller  : 'getinvolvedController'
            })

	.when('/blog', {
                templateUrl : 'app/fragments/blog/index.cgi',
                controller  : 'blogController'
            });
    });