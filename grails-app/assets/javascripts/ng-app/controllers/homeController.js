/**
 * Created by alidad on 6/21/14.
 */
angular.module('mypoc')
    .controller('homeCtrl', ['$scope' ,'$resource', function ($scope, $resource) {
        console.log("In home");

        var Persons = $resource('/grailsAngular/api/person/:id', {id: '@mid'});

        var person = Persons.get({mid: 1}, function ( data) {
            console.log(data);
            $scope.data = data;
        });


    }]);
