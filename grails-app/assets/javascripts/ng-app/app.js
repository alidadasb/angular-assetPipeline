/**
 * Created by alidad on 6/17/14.
 */
console.log("loading app");
angular.module('mypoc', ['ngRoute'])
    .config([ '$routeProvider' ,'$locationProvider','$compileProvider','$logProvider', function ($routeProvider,$locationProvider,$compileProvider,$logProvider) {

        $logProvider.debugEnabled(true);
        $routeProvider
            .when('/grailsAngular/home', {templateUrl: 'views/home.html', controller: 'homeCtrl'});

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ijet2):/);
        $locationProvider.html5Mode(true);

    }]);



